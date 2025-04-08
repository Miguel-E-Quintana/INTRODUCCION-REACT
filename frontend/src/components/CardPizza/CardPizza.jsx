import React, { useEffect, useState } from 'react'
import './CardPizza.css'

const CardPizza = () => {

    const [pizzas, setPizzas] = useState([])

    const getPizzas = async () => {
        const response = await fetch('http://localhost:5000/api/pizzas')
        const data = await response.json()
        setPizzas(data)
    }
    useEffect(() => {
        getPizzas()
    }, [])


    return (
        <div className='container'>
            {pizzas.map((pizza, index) => (
                <div className='card' key={index}>
                    <img src={pizza.img} alt="pizza"></img>
                    <h3>{pizza.name}</h3>
                    <hr></hr>
                    <h4>Ingredientes:</h4>
                    <ul>
                        {pizza.ingredients.map((ingredient) => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                    <hr></hr>
                    <h3>Precio: ${pizza.price}</h3>
                    <div className='botones'>
                        <button>Ver mas 👀</button>
                        <button className='cesta'>Añadir 🛒</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardPizza