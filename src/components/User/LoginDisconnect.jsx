import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginDisconnect = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
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
