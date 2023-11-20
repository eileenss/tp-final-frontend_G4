import React from 'react';
import { Link } from 'react-router-dom';

const ListadoLibros = (props) => {
  return (
    <ul>
      {props.Libros.map((libro) => {
        const estadoClass = libro.Estado === 'Disponible' ? 'estado-disponible' : 'estado-alquilado';

        return (
          <li key={libro._id}>
            <div className={estadoClass}>
              <Link to={`/libros/${libro._id}`}>
                <div>
                  <img src={libro.Imagen} alt="Tapa de libro" />
                </div>
                <h1>{libro.Titulo}</h1>
              </Link>
              <h3>{libro.Autor}</h3>
              <h3>
                Estado: {libro.Estado === 'Disponible' ? 'Disponible' : <span className={estadoClass}>Alquilado</span>}
              </h3>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ListadoLibros;