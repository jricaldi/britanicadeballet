import React, { PureComponent } from 'react';
import Scroll from 'react-scroll';
import Headroom from 'headroom.js';
import logo from '../../../static/images/logo.png';
import './navDesktop.scss';

const Slink = Scroll.Link;

export default class NavDesktop extends PureComponent {

  componentDidMount = () => {
    const headroom = new Headroom(this.navDesktop, {
      tolerance: 10,
    });
    headroom.init();
  }

  render = () =>
    <div class="navDesktop" ref={ node => { this.navDesktop = node; } }>
      <Slink to="id-home" class="navDesktop__logo" smooth="easeInOutCubic">
        <img src={ logo } alt="Británica de balletuuuuuu" />
        <span>Academia Británica de Ballet</span>
      </Slink>
      <nav class="navDesktop__navigator">
        <ul>
          <li><Slink to="id-profesoras" smooth="easeInOutCubic">Profesoras y Horarios</Slink></li>
          <li><Slink to="id-contacto" smooth="easeInOutCubic">Contactos</Slink></li>
        </ul>
      </nav>
    </div>;
}
