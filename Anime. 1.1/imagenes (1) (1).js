/* Aquí creamos un arreglo de objetos de cada personaje */
let personajes = [
    {
      id: 1,
      nombre: "Naruto Uzumaki",
      descripcion: "Naruto es un Hokahe",
    },
    {},
  ];
  
  const crearTarjetas = () => {
    const nombre = (document.getElementById(
      "nombre"
    ).innerHTML = `${personajes[0].nombre}`);
  
    const descripcion = (document.getElementById(
      "descripcion"
    ).innerHTML = `${personajes[0].descripcion}`);
  };
  crearTarjetas();