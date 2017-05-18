import React from 'react';
import Scroll from 'react-scroll';
import './header.scss';
import logo from '../../../static/images/logo.png';

const Link = Scroll.Link;

const Header = () =>
  <header>
    <a href="/" id="logo"><img src={ logo } alt="Britanica de ballet" /></a>
    <nav>
      <ul>
        <li><Link href="#quienes-somos">Quienes Somos</Link></li>
        <li><Link href="#clases">Clases</Link></li>
        <li><Link href="#profesoras">Profesoras</Link></li>
        <li><Link href="#horarios">Horarios</Link></li>
        <li><Link href="#contacto">Contactos</Link></li>
      </ul>
    </nav>
  </header>;

export default Header;
