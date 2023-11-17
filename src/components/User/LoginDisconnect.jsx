import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginDisconnect = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Borra el token del localStorage al hacer clic en el botón de desconexión
    localStorage.removeItem('token');
    // Redirige al usuario de vuelta a la página de inicio de sesión
    navigate('/');
  };

  return (
    <div>
      <h1>Página de Desconexión</h1>
      <p>Presiona el botón para desconectar tu cuenta:</p>
      <button onClick={handleLogout}>Desconectar</button>
    </div>
  );
};

export default LoginDisconnect;
