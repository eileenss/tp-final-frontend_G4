const Libro = (props) => {
  return (
    <li>
      <div>
        <div>
          <img src={props.Imagen} alt="Tapa de libro"></img>
        </div>
        <h1>Título: {props.Titulo}</h1>
        <h3>Autor: {props.Autor}</h3>
        <h3>Género: {props.Genero}</h3>
        <h3>Sinopsis: {props.Sinopsis}</h3>
        <h3>Fecha de publicación: {props.FechaPublicacion}</h3>
        <h3>Editorial: {props.Editorial}</h3>
        <h3>Idioma: {props.Idioma}</h3>
        <h3>Estado: {props.Estado}</h3>
      </div>
    </li>
  );
};

export default Libro;
