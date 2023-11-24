import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Libro from '../libros/Libro';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [librosDetails, setLibrosDetails] = useState([]);
  const [libro, setLibro] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`http://localhost:4000/users/user/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    if (user && user.libros) {
      const fetchLibrosDetails = async () => {
        const librosPromises = user.libros.map((libroId) =>
          fetch(`http://localhost:4000/libros/${libroId}`).then((response) =>
            response.json()
          )
        );
        const librosData = await Promise.all(librosPromises);
        setLibrosDetails(librosData);
      };
      fetchLibrosDetails();
    }
  }, [user]);

  const devolverLibro = async (idLibro) => {
    console.log(idLibro);
    const idUser = jwtDecode(token)._id;
    try {
      const responseLibro = await fetch(
        `http://localhost:4000/libros/devolver/${idLibro}`,
        {
          method: 'POST',
        }
      );
      const responseUsuario = await fetch(
        `http://localhost:4000/users/devolver/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ idLibro, idUser }),
        }
      );

      if (responseLibro.ok) {
        setLibro((prevLibro) => ({ ...prevLibro, Estado: 'Disponible' }));
        console.log('Libro devuelto con éxito.');
      } else {
        console.error('Error al devolver el libro.');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div>
      <div>
        <h2>Mis Libros</h2>
        <button>
          <Link to="/">Ir a la página de inicio</Link>
        </button>
        <p>DNI: {user.dni}</p>
        <ul>
          {librosDetails.map((libroDetails, index) => (
            <li key={libroDetails._id}>
              <Libro
                Imagen={libroDetails.Imagen}
                Titulo={libroDetails.Titulo}
                Autor={libroDetails.Autor}
                Estado={libroDetails.Estado}
                mostrarEstado={false}
              />
              <button onClick={() => devolverLibro(libroDetails._id)}>
                Devolver
              </button>{' '}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDetails;
