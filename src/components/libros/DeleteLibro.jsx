import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';

const DeleteLibro = () => {
  const { id } = useParams();
  const [libro, setLibro] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/libros/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setLibro(data);
      })
      .catch((error) => console.log('Error en la carga', error));
  }, [id]);

  const deleteLibroHandler = () => {
    const requestOptions = {
      method: 'DELETE',
    };

    fetch(`http://localhost:4000/libros/deleteLibro/${id}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('El request no fue exitoso');
        }
        return response.json();
      })
      .then((data) => {
        console.log('respuesta del servidor:', data);
      })
      .catch((error) => console.log('Error al borrar libro', error));
  };

  if (!libro) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="LibroDetails-container">
      <div>
        <img src={libro.Imagen} alt="Tapa de libro" />
      </div>
      <div>
        <h1>Título: {libro.Titulo}</h1>
        <h3>Autor: {libro.Autor}</h3>
      </div>
      <h2>¿Estás seguro de que deseas borrar este libro?</h2>
      <button onClick={deleteLibroHandler}>Borrar Libro</button>
      <button>
            <Link to="/libros" className="nav-link">Volver al listado</Link> 
        </button>
    </div>
  );
};

export default DeleteLibro;
