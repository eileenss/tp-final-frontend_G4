import { useState, useEffect } from "react";
import ListadoLibros from "./ListadoLibros";
import { Link } from 'react-router-dom';

const Libros = (props) => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/libros")
      .then((response) => response.json())
      .then((data) => {
        setLibros(data);
      })
      .catch((error) => console.log("Error en la carga", error));
  }, []);

  return (
    <div> 
      <button>
            <Link to="/" className="nav-link">Volver al inicio</Link> 
        </button>
      <ListadoLibros Libros={libros} />
      <button>
            <Link to="/" className="nav-link">Volver al inicio</Link> 
        </button>
    </div>
  );
};

export default Libros;
