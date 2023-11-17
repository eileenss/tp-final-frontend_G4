import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Si hay un token almacenado, la proxima vez que el usuario entre a la pagina lo redirige a desconectar
      navigate('/disconnect');
    }
  }, [navigate]);

  const loginHandler = async () => {
    try {
      const response = await fetch('http://localhost:4000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Si la respuesta es exitosa, data debería contiene un token
        localStorage.setItem('token', data.token);
        // Redirige a la página '/' después de un inicio de sesión exitoso
        navigate('/');
      } else {
        setError('Error al iniciar sesión')
        // Seteamos el error a enviar
      }
    } catch (error) {
      setError('Error en la solicitud:', error)
      // Seteamos el error a enviar
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await loginHandler();
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default LoginForm;
