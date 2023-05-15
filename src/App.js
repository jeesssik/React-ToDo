import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Tarjeta from './components/Tarjeta';

const App = () => {
  const [tarjetas, setTarjetas] = useState([]);

  const agregarTarjeta = (contenido) => {
    const nuevaTarjeta = {
      id: new Date().getTime(),
      contenido: contenido,
      color: getRandomColor(), // Genera un color aleatorio
    };
    setTarjetas([...tarjetas, nuevaTarjeta]);
  };
    

  const getRandomColor = () => {
    const colors = ['#FAD8D4', '#FFE1AE', '#FEFDF9', '#C5E5DF', '#FFA500', '#C38379','#D6EBD7','#D6DCEB']; // Colores disponibles
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const eliminarTarjeta = (id) => {
    const nuevasTarjetas = tarjetas.filter((tarjeta) => tarjeta.id !== id);
    setTarjetas(nuevasTarjetas);
  };

  return (
    <div className="App container mt-5">
      <h1 className="text-center mb-4 titulo">Aplicación de Tarjetas</h1>
      <Formulario onAgregarTarjeta={agregarTarjeta} />
      <div className="row justify-content-center mt-4">
        {tarjetas.map((tarjeta) => (
          <Tarjeta
            key={tarjeta.id}
            contenido={tarjeta.contenido}
            onEliminar={() => eliminarTarjeta(tarjeta.id)}
            color={tarjeta.color}
          />
        ))}
      </div>
    </div>
  );
};

export default App;