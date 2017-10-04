import React, { PureComponent } from 'react';
import Scroll from 'react-scroll';
import $ from 'jquery';
import logo from '../../../static/images/logo.png';
import './navMobile.scss';

const Slink = Scroll.Link;

export default class NavMobile extends PureComponent {

  showMobileNav = () => {
    $(this.mainNav).fadeToggle(500);
    $(this.topMenu).toggleClass('top-animate');
    $(this.midMenu).toggleClass('mid-animate');
    $(this.bottomMenu).toggleClass('bottom-animate');
  }

  render = () =>
    <div class="navMobile">
      <Slink to="id-home" class="navMobile__logo" smooth="easeInOutCubic">
        <img src={ logo } alt="Británica de ballet" />
      </Slink>
      <nav role="navigation">
        <ul class="navMobile__menu" ref={ node => (this.mainNav = node) }>
          <li><Slink to="id-profesoras" smooth="easeInOutCubic" onClick={ this.showMobileNav }>Profesoras y Horarios</Slink></li>
          <li><Slink to="id-contacto" smooth="easeInOutCubic" onClick={ this.showMobileNav }>Contactos</Slink></li>
          <div class="navMobile__menu__logo">
            <img src={ logo } alt="Británica de ballet" />
          </div>
        </ul>
        <div onClick={ this.showMobileNav } className="navMobile__wrap" />
        <div class="navMobile__action" >
          <a class="navMobile__action__icon">
            <div class="menui top-menu" ref={ node => (this.topMenu = node) } />
            <div class="menui mid-menu" ref={ node => (this.midMenu = node) } />
            <div class="menui bottom-menu" ref={ node => (this.bottomMenu = node) } />
          </a>
        </div>
      </nav>
    </div>;
}
