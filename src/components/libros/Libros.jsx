import { useState, useEffect } from "react";
import ListadoLibros from "./ListadoLibros";

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
      <ListadoLibros Libros={libros} />
    </div>
  );
};

export default Libros;
