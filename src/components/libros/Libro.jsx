import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { jwtDecode } from 'jwt-decode';

const Libro = (props) => {
  const { mostrarEstado } = props;
  const estadoClass = props.Estado === 'Disponible' ? 'estado-disponible' : 'estado-alquilado';
  const token = localStorage.getItem('token');

  return (
    <li className={`Libro ${estadoClass}`}>
      <div>
        <Link to={`/libros/${props.Id}`}>
          <div>
            <img src={props.Imagen} alt="Tapa de libro"></img>
          </div>
          <h1>Título: {props.Titulo}</h1>
        </Link>
        <h3>Autor: {props.Autor}</h3>
        {mostrarEstado && <h3>Estado: {props.Estado}</h3>}
      </div>
      {token != null && jwtDecode(token).rol === "admin" && 
       <>
       <Link to={`/libros/updateLibro/${props.Id}`}>
        <button>Modificar</button>
       </Link>
       <Link to={`/libros/deleteLibro/${props.Id}`}>
        <button>Borrar</button>
       </Link>
       </>
      }
    </li>
  );
};

export default Libro;
