import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { jwtDecode } from 'jwt-decode';

const Home = () => {
  const token = localStorage.getItem('token');
  useEffect(() =>{
    
    const obetenerToken = async () =>{
      if(token){
        
      }
    }
  },[])

  const mostrarRegister = true;
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
          {token != null && jwtDecode(token).rol === "admin" &&
          <li>
            <Link to="/libros/addLibro" className="nav-link">
              Crear Libro
            </Link>
          </li>}
          {token == null &&
          <li>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>}
          {/*separar login de libros alquilados*/ }
            <li>
            <Link to="/login" className="nav-link">
            Libros Alquilados
            </Link>
          </li>
            {token  &&  <button> <Link to="/disconnect" > Desconectar </Link></button>}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
