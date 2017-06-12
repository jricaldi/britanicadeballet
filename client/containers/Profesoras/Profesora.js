import React from 'react';
import './profesora.scss';

const Profesora = ({ info }) =>
  <article class="profesora row">
    <div class="profesora__image col-xs-12 center-xs">
      <img src={ info.foto } alt={ info.nombre } />
    </div>
    <div class="profesora__info col-xs-12">
      <span class="profesora__info__name">{ info.nombre }</span>
      <span class="profesora__info__surname">{ info.apellidoPaterno }</span>
    </div>
    <div class="profesora__details col-xs-12">
      <p>{ info.detalle }</p>
    </div>
  </article>;

export default Profesora;
