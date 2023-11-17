import './styles.css';

import { Link } from 'react-router-dom';

const Libro = (props) => {
  return (
    <li>
      <div>
        <Link to={`/libros/${props.Id}`}>
          <div>
            <img src={props.Imagen} alt="Tapa de libro"></img>
          </div>
          <h1>Título: {props.Titulo}</h1>
        </Link>
        <h3>Autor: {props.Autor}</h3>
        <h3>Estado: {props.Estado}</h3>
      </div>
    </li>
  ); 
};

export default Libro;
