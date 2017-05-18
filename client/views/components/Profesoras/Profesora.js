import React from 'react';
import './styles.scss';

const Profesora = ({ info }) =>
  <div class="profesora">
    <div class="foto">
      <img src={ info.foto } alt={ info.nombre } />
    </div>
    <div class="info">
      <h2>{ info.nombre }</h2>
      <p>{ info.detalle }</p>
    </div>
  </div>;

export default Profesora;
