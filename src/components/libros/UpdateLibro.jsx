import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const UpdateLibro = (props) => {
  const { id } = useParams();
  const [libro, setLibro] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/libros/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setLibro(data);
      })
      .catch((error) => console.log('Error en la carga', error));
  }, [id]);

  const updateLibroHandler = (event) => {
    event.preventDefault();
    const actualizar = {
      _id: id,
      Titulo: event.target.titulo.value,
      Autor: event.target.autor.value,
      Genero: event.target.genero.value,
      Sinopsis: event.target.sinopsis.value,
      'Fecha-publicacion': event.target.fechaPublicacion.value,
      Editorial: event.target.editorial.value,
      Idioma: event.target.idioma.value,
      Imagen:
        'https://img.freepik.com/vector-premium/portada-libro-blanco-blanco-aislado-sobre-fondo-gris-plantilla-libro-revista-o-cuaderno-vertical-cerrado-realista-su-diseno-anverso-libro_168129-357.jpg',
      Estado: event.target.estado.value,
    };

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(actualizar),
    };

    fetch(
      `http://localhost:4000/libros/updateLibro/${libro._id}`,
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('El request no fue exitoso');
        }
        return response.text();
      })
      .then((data) => {
        console.log('respuesta del servidor:', data);
      });
  };

  if (!libro) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="LibroDetails-container">
      <div>
        <img src={libro.Imagen} alt="Tapa de libro"></img>
      </div>
      <div>
        <h1>Título: {libro.Titulo}</h1>
        <h3>Autor: {libro.Autor}</h3>
        <h3>Género: {libro.Genero}</h3>
        <h3 className="Sinopsis">Sinopsis: {libro.Sinopsis}</h3>
        <h3>Fecha de publicación: {libro.FechaPublicacion}</h3>
        <h3>Editorial: {libro.Editorial}</h3>
        <h3>Idioma: {libro.Idioma}</h3>
        <h3>Estado: {libro.Estado}</h3>
      </div>
      <h2>Ingrese los nuevos valores</h2>
      <form onSubmit={updateLibroHandler}>
        <input type="text" name="titulo" placeholder="Título" /> <br />
        <input type="text" name="autor" placeholder="Autor" /> <br />
        <input type="text" name="genero" placeholder="Género" /> <br />
        <input type="text" name="sinopsis" placeholder="Sinopsis" /> <br />
        <input
          type="text"
          name="fechaPublicacion"
          placeholder="Fecha-Publicacion"
        />{' '}
        <br />
        <input type="text" name="editorial" placeholder="Editorial" /> <br />
        <input type="text" name="idioma" placeholder="Idioma" /> <br />
        <input type="text" name="estado" placeholder="Estado" /> <br />
        <button type="submit">Actualizar Libro</button>
      </form>
      <button>
            <Link to="/libros" className="nav-link">Volver al listado</Link> 
        </button>
    </div>
  );
};

export default UpdateLibro;
