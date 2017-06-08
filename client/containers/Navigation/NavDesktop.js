import React, { Component } from 'react';
import Scroll from 'react-scroll';
import { Link } from 'react-router-dom';
import Headroom from 'headroom.js';
import logo from '../../../static/images/logo.png';
import './navDesktop.scss';

const Slink = Scroll.Link;

export default class NavDesktop extends Component {

  componentDidMount = () => {
    const headroom = new Headroom(this.header);
    headroom.init();
  }

  render = () =>
    <div class="navDesktop" ref={ node => { this.header = node; } }>
      <Link to="/" class="navDesktop__logo">
        <img src={ logo } alt="Britanica de ballet" />
      </Link>
      <nav class="navDesktop__navigator">
        <ul>
          <li><Slink to="id-clases" smooth="easeInOutCubic">Clases</Slink></li>
          <li><Slink to="id-profesoras" smooth="easeInOutCubic">Profesoras</Slink></li>
          <li><Slink to="id-horarios" smooth="easeInOutCubic">Horarios</Slink></li>
          <li><Slink to="id-contacto" smooth="easeInOutCubic">Contactos</Slink></li>
        </ul>
      </nav>
    </div>;
}
