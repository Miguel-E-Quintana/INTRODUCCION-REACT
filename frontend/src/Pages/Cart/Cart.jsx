import './Cart.css';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { setCartItems, cartItems, incrementQuantity, decrementQuantity, calculateTotal } = useContext(CartContext);

    const handleDecrement = (id) => {
        const itemToDecrement = cartItems.find(item => item.id === id);

        if (itemToDecrement && itemToDecrement.count > 1) {
            decrementQuantity(id);
        } else if (itemToDecrement && itemToDecrement.count <= 1) {
            const updatedCartItems = cartItems.filter(item => item.id !== id);
            setCartItems(updatedCartItems);
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
                <button className='pay'>Pagar</button>
            </section>
        </>
    );
};

export default Cart;