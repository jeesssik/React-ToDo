import React from 'react';

const Tarjeta = ({ contenido, onEliminar, color }) => {
console.log(color)
  const handleEliminar = () => {
    onEliminar();
  };

  const tarjetaStyle = {
    backgroundColor: color,
  };

  return (
    <div className="tarjeta" style={tarjetaStyle}>
      <p>{contenido}</p>
      <button onClick={handleEliminar}>Eliminar</button>
    </div>
  );
};

export default Tarjeta;