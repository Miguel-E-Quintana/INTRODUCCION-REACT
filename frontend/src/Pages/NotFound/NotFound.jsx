import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found">
      <img src="../../../src/assets/not.png" alt="404 Not Found"></img>
      <h1>404 - Not Found</h1>
      <p>Parece que la pagina que buscas, no existe.</p>
      <button className='toHome'><Link to="/">Volver al inicio</Link></button>
    </div>
  );
}

export default NotFound