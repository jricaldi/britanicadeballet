import React from 'react';
import Header from './common/Header';

const Inicio = ({ children }) => {
  return <div>
    <Header />
    <main>{ children }</main>
  </div>;
};

export default Inicio;
