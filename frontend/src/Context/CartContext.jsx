import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (itemToAdd) => {
        const existingItem = cartItems.find(item => item.id === itemToAdd.id);

        if (existingItem) {
            setCartItems(cartItems.map(item =>
                item.id === itemToAdd.id ? { ...item, count: (item.count || 0) + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { ...itemToAdd, count: 1 }]);
        }
    };

    const incrementQuantity = (itemId) => {
        setCartItems(cartItems.map(item =>
            item.id === itemId ? { ...item, count: item.count + 1 } : item
        ));
    };

    const decrementQuantity = (itemId) => {
        setCartItems(cartItems.map(item =>
            item.id === itemId && item.count > 0 ? { ...item, count: item.count - 1 } : item
        ));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => (total + (item.price * (item.count || 0))), 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addItem, incrementQuantity, decrementQuantity, calculateTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
