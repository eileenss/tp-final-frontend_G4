import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './styles.css';

const LibroDetails = (props) => {
  const { id } = useParams();
  const [libro, setLibro] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4000/libros/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setLibro(data);
      })
      .catch((error) => console.log('Error en la carga', error));
  }, [id]);

  const alquilarLibro = async () => {
    try {
      const response = await fetch(`http://localhost:4000/libros/alquilar/${id}`, {
        method: 'POST',
      });

      if (response.ok) {
        setLibro((prevLibro) => ({ ...prevLibro, Estado: 'Alquilado' }));
        console.log('Libro alquilado con éxito.');
      } else {
        console.error('Error al alquilar el libro.');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

const devolverLibro = async () => {
    try {
      const response = await fetch(`http://localhost:4000/libros/devolver/${id}`, {
        method: 'POST',
      });

      if (response.ok) {
        setLibro((prevLibro) => ({ ...prevLibro, Estado: 'Disponible' }));
        console.log('Libro devuelto con éxito.');
      } else {
        console.error('Error al devolver el libro.');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  const estadoClass = libro.Estado === 'Disponible' ? 'estado-disponible' : 'estado-alquilado';

  return (
    <div className="LibroDetails-container">
      <div>
        <img src={libro.Imagen} alt="Tapa de libro" />
      </div>
      <h1>Título: {libro.Titulo}</h1>
      <h3>Autor: {libro.Autor}</h3>
      <h3>Género: {libro.Genero}</h3>
      <h3 className="Sinopsis">Sinopsis: {libro.Sinopsis}</h3>
      <h3>Fecha de publicación: {libro.FechaPublicacion}</h3>
      <h3>Editorial: {libro.Editorial}</h3>
      <h3>Idioma: {libro.Idioma}</h3>
      <h3>Estado: <span className={estadoClass}>{libro.Estado}</span></h3>
      {libro.Estado === 'Disponible' && <button onClick={alquilarLibro}>Alquilar</button>}
      {libro.Estado === 'Alquilado' && <button onClick={devolverLibro}>Devolver</button>}
    </div>
  );
};

export default LibroDetails;

