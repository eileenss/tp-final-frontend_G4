import Libro from './Libro';

const ListadoLibros = (props) => {
  return (
    <ul>
      {props.Libros.map((libro) => {
        return (
          <div>
            <Libro
              Id={libro._id}
              Titulo={libro.Titulo}
              Autor={libro.Autor}
              Genero={libro.Genero}
              Sinopsis={libro.Sinopsis}
              FechaPublicacion={libro['Fecha-publicacion']}
              Editorial={libro.Editorial}
              Idioma={libro.Idioma}
              Estado={libro.Estado}
              Imagen={libro.Imagen}
            />
          </div>
        );
      })}
    </ul>
  );
};

export default ListadoLibros;
