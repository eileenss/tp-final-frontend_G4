const AddLibro = () => {
  const addLibroHandler = (event) => {
    event.preventDefault();
    const crear = {
      Titulo: event.target.titulo.value,
      Autor: event.target.autor.value,
      Genero: event.target.genero.value,
      Sinopsis: event.target.sinopsis.value,
      'Fecha-publicacion': event.target.fechaPublicacion.value,
      Editorial: event.target.editorial.value,
      Idioma: event.target.idioma.value,
      Imagen:
        'https://img.freepik.com/vector-premium/portada-libro-blanco-blanco-aislado-sobre-fondo-gris-plantilla-libro-revista-o-cuaderno-vertical-cerrado-realista-su-diseno-anverso-libro_168129-357.jpg',
      Estado: 'Disponible',
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(crear),
    };

    fetch('http://localhost:4000/libros/addLibro', requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('El request no fue exitoso');
        }
        return response.text();
      })
      .then((data) => {
        console.log('respuesta del servidor:', data);
      });
  };

  return (
    <div>
      <h2>Agregar Nuevo Libro</h2>
      <form onSubmit={addLibroHandler}>
        <input type="text" name="titulo" placeholder="Título" /> <br />
        <input type="text" name="autor" placeholder="Autor" /> <br />
        <input type="text" name="genero" placeholder="Género" /> <br />
        <input type="text" name="sinopsis" placeholder="Sinopsis" /> <br />
        <input
          type="text"
          name="fechaPublicacion"
          placeholder="Fecha-Publicacion"
        />{' '}
        <br />
        <input type="text" name="editorial" placeholder="Editorial" /> <br />
        <input type="text" name="idioma" placeholder="Idioma" /> <br />
        <button type="submit">Agregar Libro</button>
      </form>
    </div>
  );
};

export default AddLibro;
