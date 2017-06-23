import React from 'react';
import './profesora.scss';

const Profesora = ({ info }) =>
  <article class="profesora row">
    <div class="profesora__image col-xs-12 center-xs">
      <img src={ info.foto } alt={ info.nombre } data-aos="zoom-in" data-aos-once />
    </div>
    <div class="profesora__info col-xs-12">
      <span class="profesora__info__name" data-aos="zoom-out-right" data-aos-once>{ info.nombre }</span>
      <span class="profesora__info__surname" data-aos="zoom-out-right" data-aos-once>{ info.apellidoPaterno }</span>
    </div>
    <div class="profesora__details col-xs-12">
      { info.detalle }
    </div>
  </article>;

export default Profesora;
