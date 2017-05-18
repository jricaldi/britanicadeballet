import React from 'react';
import Scroll from 'react-scroll';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from '../../../static/images/logo.png';

const Slink = Scroll.Link;

const Header = () =>
  <header>
    <Link to="/" class="logo"><img src={ logo } alt="Britanica de ballet" /></Link>
    <nav>
      <ul>
        <li><Slink to="id-clases" smooth="easeInOutCubic" class="underline">Clases</Slink></li>
        <li><Slink to="id-profesoras" smooth="easeInOutCubic" class="underline">Profesoras</Slink></li>
        <li><Slink to="id-horarios" smooth="easeInOutCubic" class="underline">Horarios</Slink></li>
        <li><Slink to="id-contacto" smooth="easeInOutCubic" class="underline">Contactos</Slink></li>
      </ul>
    </nav>
  </header>;

export default Header;
