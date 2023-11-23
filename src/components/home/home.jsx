import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { jwtDecode } from 'jwt-decode';

const Home = () => {
  const [mailAdmin, setMailAdmin] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const obtenerAdmin = async () => {
      if (token) {
        try {
          // Decodificar el token para obtener el email
          const decodedToken = jwtDecode(token);
          const adminEmail = 'admin@admin.com';

          // Check if the email is admin@admin.com
          if (decodedToken.email === adminEmail) {
            // Set mailAdmin state to 'admin@admin.com'
            setMailAdmin(adminEmail);
            // The user is an admin, you can set a state or take any other action if needed
            // For now, let's log a message to the console
            console.log('User is an admin');
          }
        } catch (error) {
          console.error('Error al decodificar el token:', error);
          // Manejar errores de decodificación del token
        }
      }
    };

    obtenerAdmin();
  }, [token]); // Include 'token' in the dependencies array

  return (
    <div className="home-container">
      <h1 className="welcome-message">Bienvenido</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/libros" className="nav-link">
              Libros
            </Link>
          </li>
          {token != null && mailAdmin === 'admin@admin.com' && (
            <li>
              <Link to="/libros/addLibro" className="nav-link">
                Agregar libro
              </Link>
            </li>
          )}
          {token == null && (
            <>
              <li>
                <Link to="/register" className="nav-link">
                  Registrarse
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-link">
                  Iniciar sesión
                </Link>
              </li>
            </>
          )}

          {/* Separar login de libros alquilados */}
          <li>
            <Link to="/login" className="nav-link">
              Libros Alquilados
            </Link>
          </li>
          {token && (
            <button>
              <Link to="/disconnect">Cerrar sesión</Link>
            </button>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
