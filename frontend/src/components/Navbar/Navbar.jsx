import './Navbar.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';

const Navbar = () => {
    const total = useContext(CartContext).calculateTotal();
    const { token, logout } = useContext(UserContext);
    return (
        <>
            <nav>
                <h3>Pizzeria Mamma Mia!</h3>
                <ul className='nav-links'>
                    <Link to='/'><li>🍕 Home</li></Link>
                    {token ? (
                        <>
                            <Link to='/Profile'><li>👤 Profile</li></Link>
                            <Link to='/' onClick={logout}><li>🔒 Logout</li></Link>
                        </>
                    ) : (
                        <>
                            <Link to='/Login'><li>🔐 Login</li></Link>
                            <Link to="/register"><li>🔐 Register</li></Link>
                        </>
                    )}
 
                </ul>  
                <Link to='/Cart' className='total'>🛒Total: ${total}</Link>
            </nav>
        </>
    )
}

export default Navbar