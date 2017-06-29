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
    <div class="profesora__horarios col-xs-12">
      { info.horarios.map(horario =>
        <div key={ horario.name } class="profesora__horarios__single row">
          <div class="profesora__horarios__single__name col-md-4 col-xs-12 center-xs end-md">
            <span>{ horario.name }</span>
          </div>
          <div class="profesora__horarios__single__time col-md-8 col-xs-12 center-xs start-md">
            <span>{ horario.time }</span>
          </div>
        </div>) }
    </div>
  </article>;

export default Profesora;
