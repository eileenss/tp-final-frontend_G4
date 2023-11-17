import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = ({ usuarioLogueado }) => {
  return (
    <div className="home-container">
      <h1 className="welcome-message">Bienvenido {usuarioLogueado}</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/libros" className="nav-link">Libros</Link>
          </li>
          <li>
            <Link to="/libros-alquilados" className="nav-link">Libros Alquilados</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;