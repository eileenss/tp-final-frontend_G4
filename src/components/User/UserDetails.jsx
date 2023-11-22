import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Libro from "../libros/Libro";
import { Link } from "react-router-dom";

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [librosDetails, setLibrosDetails] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:4000/users/user/${id}`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.log(error));
    }, [id]);

    useEffect(() => {
        if (user && user.libros) {
            const fetchLibrosDetails = async () => {
              const librosPromises = user.libros.map(libroId =>
                fetch(`http://localhost:4000/libros/${libroId}`)
                  .then(response => response.json())
              );
              const librosData = await Promise.all(librosPromises);
              setLibrosDetails(librosData);
            };
            fetchLibrosDetails();
          }
      }, [user]);

    const devolverLibro = (bookId) => {
        // Lógica para devolver el libro con el ID bookId
        console.log(`Devolviendo libro con ID: ${bookId}`);
        // Aquí puedes realizar una solicitud al servidor para devolver el libro, o realizar la lógica necesaria.
    };

    return (
        <div>
            <div>
              <h2>Mis Libros</h2>
              <button><Link to="/">Ir a la página de inicio</Link></button>
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
                    <button onClick={() => devolverLibro(user.libros[index])}>Devolver</button>
                  </li>
                ))}
              </ul>
            </div>
            <button><Link to="/disconnect">Desconectar</Link></button>
        </div>
      );
    };
    
    export default UserDetails;