import React from 'react';
import './contacto.scss';

const Contacto = () =>
  <section class="contacto" id="id-contacto">
    <div class="contacto__box">
      <div class="contacto__box__button">
        <a>facebook</a>
        <a>youtube</a>
        <a>twitter</a>
      </div>
      <div class="contacto__box__info">
      hello word
      </div>
      <div class="contacto__box__map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7176653663755!2d-77.00035304905748!3d-12.131459991368802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b8087d4a59a9%3A0x4a3ecbdc4a007ceb!2sAcademia+Brit%C3%A1nica+de+Ballet!5e0!3m2!1ses-419!2sus!4v1498017371971" allowFullScreen />
      </div>
    </div>
  </section>;

export default Contacto;
