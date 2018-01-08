import React, { PureComponent } from 'react';
import './contacto.scss';

export default class Contacto extends PureComponent {
  render = () => {
    return <section class="contacto" id="id-contacto">
      <div class="contacto__box">
        <div class="contacto__box__button">
          <a href="https://www.facebook.com/britanicadeballet" target="_blank" rel="noopener noreferrer">facebook</a>
          <a href="https://www.instagram.com/britanicadeballet/" target="_blank" rel="noopener noreferrer">instagram</a>
          <a href="https://www.youtube.com/c/Britanicadeballet" target="_blank" rel="noopener noreferrer">youtube</a>
        </div>
        <div class="contacto__box__info">
          <div class="contacto__box__info__address">
            <a href="tel:+5114481113">+51 1 448-1113</a>
            <p>
              Av. Alfredo Franco 200, Urb. Chama, Surco - Lima
            </p>
            <p>
              britanicaballet@gmail.com
            </p>
            <p>
              Atención presencial: <br /><br />
              &nbsp;&nbsp; Lunes y Miércoles 3:00pm - 6:30pm <br /><br />
              &nbsp;&nbsp; Martes y Jueves 3:30pm - 6:30pm <br /><br />
              &nbsp;&nbsp; Sábados 10:00am - 1:00pm
            </p>
          </div>
          <div class="contacto__box__info__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7176653663755!2d-77.00035304905748!3d-12.131459991368802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b8087d4a59a9%3A0x4a3ecbdc4a007ceb!2sAcademia+Brit%C3%A1nica+de+Ballet!5e0!3m2!1ses-419!2sus!4v1498017371971" allowFullScreen />
          </div>
        </div>
      </div>
    </section>;
  }
}
