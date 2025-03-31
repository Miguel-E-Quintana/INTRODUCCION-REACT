import './Navbar.css'

const Navbar = () => {
    const total = 25000;
    const token = false;
    return (
        <>
            <nav>
                <h3>Pizzeria Mamma Mia!</h3>
                <ul>
                    <li>🍕<a href="#">Home</a></li>
                    <li>🔐<a href="#">Login</a></li>
                    <li>🔐<a href="#">Register</a></li>  
                </ul>  
                <a href="#" className='total'>🛒Total: ${total}</a>
            </nav>
        </>
    )
}

export default Navbar