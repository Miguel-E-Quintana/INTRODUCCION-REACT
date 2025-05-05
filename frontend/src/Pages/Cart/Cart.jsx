import './Cart.css';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';

const Cart = () => {
    const { setCartItems, cartItems, incrementQuantity, decrementQuantity, calculateTotal } = useContext(CartContext);
    const { token } = useContext(UserContext);
    const [checkoutSuccess, setCheckoutSuccess] = useState(false);
    const [checkoutError, setCheckoutError] = useState(null);
    const [checkoutLoading, setCheckoutLoading] = useState(false); // Agrega estado de carga

    const handleDecrement = (id) => {
        const itemToDecrement = cartItems.find(item => item.id === id);

        if (itemToDecrement && itemToDecrement.count > 1) {
            decrementQuantity(id);
        } else if (itemToDecrement && itemToDecrement.count <= 1) {
            const updatedCartItems = cartItems.filter(item => item.id !== id);
            setCartItems(updatedCartItems);
        }
    };

    const handleCheckout = async () => {
        if (!token) {
            alert('Debes iniciar sesión para realizar el pedido.');
            return;
        }

        setCheckoutLoading(true);
        setCheckoutError(null);

        try {
            const response = await fetch('http://localhost:5000/api/checkouts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ cart: cartItems.map(item => ({ id: item.id, quantity: item.count })) }), // Usa cartItems aquí
            });

            if (response.ok) {
                setCartItems([]); // Limpia el carrito del contexto
                setCheckoutSuccess(true);
                setTimeout(() => setCheckoutSuccess(false), 3000);
            } else {
                const errorData = await response.json();
                setCheckoutError(errorData?.error || 'Error al procesar el pedido.');
            }
        } catch (error) {
            setCheckoutError('Error de conexión al procesar el pedido.');
        } finally {
            setCheckoutLoading(false);
        }
    };

    return (
        <>
            <section className="cart-container">
                <h2>Detalles del pedido:</h2>
                <div className="cart">
                    <ul className='cart-list'>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <img src={item.img} alt={item.name} />
                                <h4>{item.name}</h4>
                                <p>{item.price}</p>
                                <button className='plus' onClick={() => incrementQuantity(item.id)}>+</button>
                                <span>{item.count || 0}</span>
                                <button className='minus' onClick={() => handleDecrement(item.id)}>-</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <h3>Total: ${calculateTotal()}</h3>
                <button className='pay' onClick={handleCheckout} disabled={!token || cartItems.length === 0 || checkoutLoading}>
                    {checkoutLoading ? 'Procesando...' : (token ? (cartItems.length > 0 ? 'Pagar' : 'Carrito Vacío') : 'Pagar')}
                </button>
                {!token && <p>Debes iniciar sesión para poder pagar.</p>}
                {checkoutSuccess && <p>¡Pedido realizado con éxito!</p>}
                {checkoutError && <p>{checkoutError}</p>}
            </section>
        </>
    );
};

export default Cart;