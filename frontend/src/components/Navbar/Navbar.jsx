import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const total = 0;
    const token = false;
    return (
        <>
            <nav>
                <h3>Pizzeria Mamma Mia!</h3>
                <ul className='nav-links'>
                    <Link to='/'><li>🍕 Home</li></Link>
                    <Link to='/Login'><li>🔐 Login</li></Link>
                    <Link to='/Register'><li>🔐 Register</li></Link>  
                </ul>  
                <Link to='/Cart' className='total'>🛒Total: ${total}</Link>
            </nav>
        </>
    )
}

export default Navbar