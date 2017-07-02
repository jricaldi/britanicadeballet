import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Headroom from 'headroom.js';
import logo from '../../../static/images/logo.png';
import './navDesktop.scss';

const Slink = Scroll.Link;

export default class NavDesktop extends Component {

  componentDidMount = () => {
    const headroom = new Headroom(this.navDesktop);
    headroom.init();
  }

  render = () =>
    <div class="navDesktop" ref={ node => { this.navDesktop = node; } }>
      <Slink to="id-home" class="navDesktop__logo" smooth="easeInOutCubic">
        <img src={ logo } alt="Britanica de ballet" />
      </Slink>
      <nav class="navDesktop__navigator">
        <ul>
          <li><Slink to="id-profesoras" smooth="easeInOutCubic">Profesoras y Horarios</Slink></li>
          <li><Slink to="id-contacto" smooth="easeInOutCubic">Contactos</Slink></li>
        </ul>
      </nav>
    </div>;
}
