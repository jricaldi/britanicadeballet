import React, { Component } from 'react';
import Scroll from 'react-scroll';
import { Link } from 'react-router-dom';
import Headroom from 'headroom.js';
import $ from 'jquery';
import './header.scss';
import { OnMobile, OnAtLeastTablet } from '../../layout/layoutGrid';
import logo from '../../../static/images/logo.png';
import '../../../static/libs/hamburger/styles.scss';

const Slink = Scroll.Link;

export default class Header extends Component {

  componentDidMount = () => {
    const headroom = new Headroom(this.header);
    headroom.init();
  }

  showMobileNav = () => {
    $('.main-nav').fadeToggle(500);
    $('.top-menu').toggleClass('top-animate');
    $('.mid-menu').toggleClass('mid-animate');
    $('.bottom-menu').toggleClass('bottom-animate');
  }

  render = () => <header>
    <div class="wrapper">
      <OnAtLeastTablet ref={ node => { this.header = node; } }>
        <Link to="/" class="logo"><img src={ logo } alt="Britanica de ballet" /></Link>
        <nav class="nav-large">
          <ul>
            <li><Slink to="id-clases" smooth="easeInOutCubic" class="underline">Clases</Slink></li>
            <li><Slink to="id-profesoras" smooth="easeInOutCubic" class="underline">Profesoras</Slink></li>
            <li><Slink to="id-horarios" smooth="easeInOutCubic" class="underline">Horarios</Slink></li>
            <li><Slink to="id-contacto" smooth="easeInOutCubic" class="underline">Contactos</Slink></li>
          </ul>
        </nav>
      </OnAtLeastTablet>
      <OnMobile>
        <Link to="/" class="logo"><img src={ logo } alt="Britanica de ballet" /></Link>
        <div>
          <nav role="navigation">
            <ul class="main-nav">
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Our Work</a></li>
              <li><a href="">Products</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </nav>
        </div>
        <a class="nav-trigger" role="button" onClick={ this.showMobileNav } >
          <div class="hamburger">
            <div class="menui top-menu" />
            <div class="menui mid-menu" />
            <div class="menui bottom-menu" />
          </div>
        </a>
      </OnMobile>
    </div>
  </header>;
}
