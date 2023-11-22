import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';




const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    const obtenerIdDeToken = async () => {
      if (token) {
        try {
          // Decodificar el token para obtener el ID
          const decodedToken = jwtDecode(token);
          const userId = decodedToken._id
          
          // Redirigir al usuario al obtener el ID del token
          if (userId) {
            navigate(`/user/${userId}`);
          } else {
            console.error('ID no válido en el token');
            // Aquí podrías manejar el caso en el que el ID no sea válido
            // Puedes redirigir a una página de error o a otro lugar
          }
        } catch (error) {
          console.error('Error al decodificar el token:', error);
          // Manejar errores de decodificación del token
        }
      }
    };
  
    obtenerIdDeToken();
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
