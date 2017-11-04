import React from 'react';
import './contacto.scss';
import equipoImg from '../../../static/images/equipo.jpg';

const Contacto = () =>
  <section class="contacto" id="id-contacto">
    <div class="contacto__image">
      <img src={ equipoImg } alt="equipo" />
    </div>
    <div class="contacto__overlay" />
    <div class="contacto__info">
      <p>
        <a href="tel:+5114481113"> Teléfono: +51 1 448-1113</a>
      </p>
      <p>
        Email: britanicaballet@gmail.com
      </p>
      <p>
        Atención presencial: <br /><br />
        &nbsp;&nbsp; Lunes y Miércoles 3:00pm - 6:30pm <br /><br />
        &nbsp;&nbsp; Martes y Jueves 3:30pm - 6:30pm <br /><br />
        &nbsp;&nbsp; Sábados 3:00pm - 6:00pm
      </p>
    </div>
  </section>;

export default Contacto;
