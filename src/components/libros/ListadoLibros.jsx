import Libro from "./Libro";
import React from 'react';
import { Link } from 'react-router-dom';

const ListadoLibros = (props) => {
  return (
    <ul>
      {props.Libros.map((libro) => {
        const estadoClass = libro.Estado === 'Disponible' ? 'estado-disponible' : 'estado-alquilado';

        return (
          <Libro
            Id={libro._id}
            Titulo={libro.Titulo}
            Autor={libro.Autor}
            Genero={libro.Genero}
            Sinopsis={libro.Sinopsis}
            FechaPublicacion={libro["Fecha-publicacion"]}
            Editorial={libro.Editorial}
            Idioma={libro.Idioma}
            Estado={libro.Estado}
            Imagen={libro.Imagen}
            Estado: {libro.Estado === 'Disponible' ? 'Disponible' : <span className={estadoClass}>Alquilado</span>}
            mostrarEstado={true}
          />
        );
      })}
    </ul>
  );
};

export default ListadoLibros;