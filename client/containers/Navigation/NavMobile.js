import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import logo from '../../../static/images/logo.png';
import '../../../static/libs/hamburger/styles.scss';
import './navMobile.scss';

export default class NavMobile extends Component {

  showMobileNav = () => {
    $('.main-nav').fadeToggle(500);
    $('.top-menu').toggleClass('top-animate');
    $('.mid-menu').toggleClass('mid-animate');
    $('.bottom-menu').toggleClass('bottom-animate');
  }
  // TODO create a function to get all links also onClick events
  render = () =>
    <div class="navMobile">
      <Link to="/" class="navMobile__logo"><img src={ logo } alt="Britanica de ballet" /></Link>
      <nav role="navigation" class="navMobile__menu">
        <ul class="main-nav">
          <li><a href="">Profesoras y Horarios</a></li>
          <li><a href="">Contactos</a></li>
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
