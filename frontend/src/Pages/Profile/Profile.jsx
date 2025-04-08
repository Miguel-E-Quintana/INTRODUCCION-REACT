import { Link } from 'react-router-dom';
import './Profile.css'

const Profile = () => {
  return (
    <section className="profile-container">
        <img src="../../../src/assets/profile.jpg" alt="Perfil"></img>
        <div className="profile-info">
            <h3>Bienvenido Juan!</h3>
            <p>Email: juanito1234@gmail.com</p>
            <p>Nombre: Juan Perez</p>
            <p>Direccion: Calle falsa 123</p>
            <p>Telefono: 123456789</p>
            <div className="profile-buttons">
                <button>Cerrar Sesion</button>
                <button><Link to='/'>Volver a inicio</Link></button>
            </div>
        </div>
    </section>
  );
}

export default Profile;