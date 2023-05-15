import React, { useState } from 'react';

const Formulario = ({ onAgregarTarjeta }) => {
  const [contenido, setContenido] = useState('');

  const handleChange = (e) => {
    setContenido(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contenido.trim() === '') {
      return;
    }
    onAgregarTarjeta(contenido);
    setContenido('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={contenido} onChange={handleChange} placeholder="Mi tarea" className="input-border-bottom" />
      <button type="submit" className="boton-pastel">Agregar Tarjeta</button>
    </form>
  );
};

export default Formulario;