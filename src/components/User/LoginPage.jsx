import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Si hay un token almacenado, redirige al usuario a la página de desconectar
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
        // Si la respuesta es exitosa, data debería contener un token
        // Puedes almacenar el token en localStorage o sessionStorage para su uso posterior
        // Por ejemplo, almacenarlo en localStorage:
        localStorage.setItem('token', data.token);
        // Redirige a la página '/home' después de un inicio de sesión exitoso
        navigate('/');
      } else {
        // Si la respuesta no es exitosa, puede ser un error de autenticación
        console.error('Error al iniciar sesión');
        // Aquí puedes mostrar un mensaje de error al usuario, por ejemplo:
        // setError('Error al iniciar sesión. Por favor, verifica tus credenciales.');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      // Manejo de errores de red u otros errores de la solicitud
      // Puedes mostrar un mensaje de error genérico o realizar alguna otra acción
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await loginHandler();
  };

  return (
    <form onSubmit={handleSubmit}>
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
