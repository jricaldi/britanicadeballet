import React from 'react';
import './profesora.scss';

const Profesora = ({ info }) =>
  <section class="profesora">
    <div class="foto">
      <img class="sombra" src={ info.foto } alt={ info.nombre } />
    </div>
    <div class="info">
      <h2>{ info.nombre }</h2>
      <p>{ info.detalle }</p>
    </div>
  </section>;

export default Profesora;
