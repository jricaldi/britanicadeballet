import React from 'react';

const Inicio = ({ children }) => {
  return <div>
    <header><h1>Cabecera</h1></header>
    <main>{ children }</main>
  </div>;
};

export default Inicio;
