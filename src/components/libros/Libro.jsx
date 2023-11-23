import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { jwtDecode } from 'jwt-decode';

const Libro = (props) => {
  const { mostrarEstado } = props;
  const estadoClass =
    props.Estado === 'Disponible' ? 'estado-disponible' : 'estado-alquilado';
  const [mailAdmin, setMailAdmin] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const obtenerAdmin = async () => {
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const adminEmail = 'admin@admin.com';

          if (decodedToken.email === adminEmail) {
            setMailAdmin(adminEmail);

            console.log('User is an admin');
          }
        } catch (error) {
          console.error('Error al decodificar el token:', error);
        }
      }
    };

    obtenerAdmin();
  }, [token]); // Include 'token' in the dependencies array

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
      {mailAdmin === 'admin@admin.com' && (
        <>
          <Link to={`/libros/updateLibro/${props.Id}`}>
            <button>Modificar</button>
          </Link>
          <Link to={`/libros/deleteLibro/${props.Id}`}>
            <button>Borrar</button>
          </Link>
        </>
      )}
    </li>
  );
};

export default Libro;
