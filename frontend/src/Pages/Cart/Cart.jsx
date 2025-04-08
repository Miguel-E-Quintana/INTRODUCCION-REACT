import './Cart.css';
import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/pizzas');
                const data = await response.json();
                setCartItems(data.map(item => ({ ...item, quantity: 0 }))); // Inicializa quantity a 0
            } catch (error) {
                console.error('Error fetching pizzas:', error);
            }
        };
        fetchCartItems();
    }, []);

    const incrementQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrementQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price);
            const quantity = parseInt(item.quantity, 10); 

            if (isNaN(price) || isNaN(quantity)) {
                return total;
            }
            return total + price * quantity;
        }, 0);
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
                                <span>{item.quantity}</span>
                                <button className='minus' onClick={() => decrementQuantity(item.id)}>-</button>
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