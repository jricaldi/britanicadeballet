import React from 'react';
import Header from '../common/Header';
import './views.scss';

const Inicio = ({ children }) => {
  return <div>
    <Header />
    <main>{ children }</main>
    <h1 class="title"> hola papa xD!</h1>
  </div>;
};

export default Inicio;
