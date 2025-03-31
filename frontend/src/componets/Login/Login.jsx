import './Login.css'
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
  
    const handleSubmit = (e) => {
      e.preventDefault()
      setError(''); // Limpiar errores previos
      setSuccess(false);
  
      if (!email || !password) {
        setError('Todos los campos son obligatorios.');
        return;
      }
  
      if (password.length < 6) {
        setError('La contraseña debe tener al menos 6 caracteres.');
        return;
      }
  
      // Si todo está bien, mostrar mensaje de éxito
      setSuccess(true);
    }
    return (
        <>
            <div className='login'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit'>Login</button>
                </form>
                {error && <p className='error'>{error}</p>}
                {success && <p className='success'>Inicio de sesión exitoso!</p>}
            </div>
        </>
    )
}

export default Login