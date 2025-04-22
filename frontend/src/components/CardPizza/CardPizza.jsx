import React, { useEffect, useState, useContext } from 'react';
import './CardPizza.css';
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';

const CardPizza = () => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const [pizzas, setPizzas] = useState([]);

    const getPizzas = async () => {
        const response = await fetch(`http://localhost:5000/api/pizzas/`);
        const data = await response.json();
        setPizzas(data);
    };

    useEffect(() => {
        getPizzas();
    }, []);

    const addItemToCart = (itemId) => {
        let findItem = cartItems.find((item) => item.id === itemId);

        if (findItem) {
            const updatedCartItems = cartItems.map((item) =>
                item.id === itemId ? { ...item, count: item.count + 1 } : item
            );
            setCartItems(updatedCartItems);
        } else {
            const newItem = pizzas.find((item) => item.id === itemId);
            if (newItem) {
                setCartItems([...cartItems, { ...newItem, count: 1 }]);
            }
        }
    };

    return (
        <div className='container'>
            {pizzas.map((pizza, index) => (
                <div className='card' key={index}>
                    <img src={pizza.img} alt="pizza" />
                    <h3>{pizza.name}</h3>
                    <hr />
                    <h4>Ingredientes:</h4>
                    <ul>
                        {pizza.ingredients.map((ingredient) => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                    <hr />
                    <h3>Precio: ${pizza.price}</h3>
                    <div className='botones'>
                    <Link to={`/pizza/${pizza.id}`}><button >Ver mas 👀</button></Link>
                        <button className='cesta' onClick={() => addItemToCart(pizza.id)}>Añadir 🛒</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardPizza;