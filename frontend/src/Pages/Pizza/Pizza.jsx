import React, { useEffect, useState } from 'react'
import './Pizza.css'

const Pizza = () => {
    const [pizza, setPizza] = useState('')
    const getPizza = async () => {
        const response = await fetch('http://localhost:5000/api/pizzas/p001')
        const data = await response.json()
        setPizza(data)
    }

    useEffect(() => {
        getPizza()
    }, [])

    return (
    <>
    <div className='container2'>
        <div className='card2'>
            <h3>{pizza.name}</h3>
            <hr></hr>
            <img src={pizza.img} alt="pizza"></img>
            <hr></hr>
            <h3>Descripción:</h3>
            <p>{pizza.desc}</p>
            <hr></hr>
            <h4>Ingredientes:</h4>
            <ul>
                {pizza.ingredients && pizza.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <hr></hr>
            <h3>Precio: ${pizza.price}</h3>
            <div className='botones'>
                <button className='cesta'>Añadir 🛒</button>
            </div>
        </div>
    </div>
    </>
    )
}

export default Pizza