const Libro = (props) => {
  return (
    <li>
      <div>
        <div>
          <img src={props.Imagen} alt="Tapa de libro"></img>
        </div>
        <h2>Título: {props.Titulo}</h2>
        <h1>Autor: {props.Autor}</h1>
        <h1>Género: {props.Genero}</h1>
        <h1>Sinopsis: {props.Sinopsis}</h1>
        <h1>Fecha de publicación: {props.FechaPublicacion}</h1>
        <h1>Editorial: {props.Editorial}</h1>
        <h1>Idioma: {props.Idioma}</h1>
        <h1>Estado: {props.Estado}</h1>
      </div>
    </li>
  );
};

export default Libro;
