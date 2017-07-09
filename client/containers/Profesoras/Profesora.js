import React from 'react';
import './profesora.scss';

const Profesora = ({ info }) =>
  <article class="profesora">
    <div class="profesora__image">
      <img src={ info.foto } alt={ info.nombre } data-aos="zoom-in" data-aos-once />
    </div>
    <div class="profesora__info">
      <span class="profesora__info__name" data-aos="zoom-out-right" data-aos-once>{ info.nombre }</span>
      <span class="profesora__info__surname" data-aos="zoom-out-right" data-aos-once>{ info.apellidoPaterno }</span>
    </div>
    <div class="profesora__details">
      { info.detalle }
    </div>
    <div class="profesora__horarios">
      { info.horarios.map(horario =>
        <div key={ horario.name } class="profesora__horarios__single">
          <div class="profesora__horarios__single__name">
            <div>{ horario.name }</div>
          </div>
          <div class="profesora__horarios__single__time">
            <div>{ horario.time }</div>
          </div>
        </div>) }
    </div>
  </article>;

export default Profesora;
