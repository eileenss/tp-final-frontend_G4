import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './styles.css';

const LibroDetails = (props) => {
  const { id } = useParams();
  const [libro, setLibro] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/libros')
      .then((response) => response.json())
      .then((data) => {
        setLibro(data.find((libro) => libro['_id'] === id));
      })
      .catch((error) => console.log('Error en la carga', error));
  }, [id]);

  return (
    <div className="LibroDetails-container">
      <div>
        <img src={libro.Imagen} alt="Tapa de libro"></img>
      </div>
      <h1>Título: {libro.Titulo}</h1>
      <h3>Autor: {libro.Autor}</h3>
      <h3>Género: {libro.Genero}</h3>
      <h3 className="Sinopsis">Sinopsis: {libro.Sinopsis}</h3>
      <h3>Fecha de publicación: {libro.FechaPublicacion}</h3>
      <h3>Editorial: {libro.Editorial}</h3>
      <h3>Idioma: {libro.Idioma}</h3>
      <h3>Estado: {libro.Estado}</h3>
      {libro.Estado === 'Disponible' && <button>Alquilar</button>}
      {libro.Estado === 'Alquilado' && <button>Devolver</button>}
    </div>
  );
};

export default LibroDetails;

//agregar logica de que si este Libro esta en la coleccion
//de libros del usuario loggeado, que el boton diga Devolver
//en vez de alquilar y que cambie el estado del Libro.
