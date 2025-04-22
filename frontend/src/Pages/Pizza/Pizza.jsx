import './Pizza.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 

const Pizza = () => {
    const { id } = useParams(); 
    const [pizza, setPizza] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getPizza = async () => { 
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setPizza(data); 
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPizza(); 
    }, [id]); 

    if (loading) {
        return <div>Cargando detalles de la pizza...</div>;
    }

    if (error) {
        return <div>Error al cargar la pizza: {error}</div>;
    }

    if (!pizza) {
        return <div>Pizza no encontrada.</div>;
    }

    return (
        <div className='container2'>
            <div className='card2'>
                <h3>{pizza.name}</h3>
                <hr />
                <img src={pizza.img} alt={pizza.name} />
                <hr />
                <h3>Descripción:</h3>
                <p>{pizza.desc}</p>
                <hr />
                <h4>Ingredientes:</h4>
                <ul>
                    {pizza.ingredients && pizza.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <hr />
                <h3>Precio: ${pizza.price}</h3>
                <div className='botones'>
                    <button className='cesta'>Añadir 🛒</button>
                </div>
            </div>
        </div>
    );
};

export default Pizza;