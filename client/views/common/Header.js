import React from 'react';
import './header.scss';

const Header = () =>
  <header>
    <a href="/" id="logo"><img src="images/logo.png" alt="Britanica de ballet" /></a>
    <nav>
      <ul>
        <li><a href="/quienes-somos">Quienes Somos</a></li>
        <li><a href="/clases">Clases</a></li>
        <li><a href="/profesoras">Profesoras</a></li>
        <li><a href="/horarios">Horarios</a></li>
        <li><a href="/contacto">Contactos</a></li>
      </ul>
    </nav>
  </header>;

export default Header;
