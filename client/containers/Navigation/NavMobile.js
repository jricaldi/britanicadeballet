import React, { Component } from 'react';
import Scroll from 'react-scroll';
import $ from 'jquery';
import logo from '../../../static/images/logo.png';
import '../../../static/libs/hamburger/styles.scss';
import './navMobile.scss';

const Slink = Scroll.Link;

export default class NavMobile extends Component {

  showMobileNav = () => {
    $('.main-nav').fadeToggle(500);
    $('.top-menu').toggleClass('top-animate');
    $('.mid-menu').toggleClass('mid-animate');
    $('.bottom-menu').toggleClass('bottom-animate');
  }

  render = () =>
    <div class="navMobile">
      <Slink to="id-home" class="navMobile__logo" smooth="easeInOutCubic">
        <img src={ logo } alt="Británica de ballet" />
      </Slink>
      <nav role="navigation" class="navMobile__menu">
        <ul class="main-nav">
          <li><Slink to="id-profesoras" smooth="easeInOutCubic" onClick={ this.showMobileNav }>Profesoras y Horarios</Slink></li>
          <li><Slink to="id-contacto" smooth="easeInOutCubic" onClick={ this.showMobileNav }>Contactos</Slink></li>
        </ul>
        <div class="navMobile__action" onClick={ this.showMobileNav } >
          <a class="navMobile__action__icon">
            <div class="menui top-menu" />
            <div class="menui mid-menu" />
            <div class="menui bottom-menu" />
          </a>
        </div>
      </nav>
    </div>;
}
