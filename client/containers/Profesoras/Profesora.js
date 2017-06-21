import React, { Component } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';

import './profesora.scss';

export default class Profesora extends Component {

  componentDidMount = () => {
    aos.init();
  }

  render = () => {
    const { info } = this.props;
    return <article class="profesora row">
      <div class="profesora__image col-xs-12 center-xs">
        <img src={ info.foto } alt={ info.nombre } data-aos="zoom-in" data-aos-once />
      </div>
      <div class="profesora__info col-xs-12">
        <span class="profesora__info__name" data-aos="zoom-out-right">{ info.nombre }</span>
        <span class="profesora__info__surname" data-aos="zoom-out-right">{ info.apellidoPaterno }</span>
      </div>
      <div class="profesora__details col-xs-12">
        { info.detalle }
      </div>
    </article>;
  }
}
