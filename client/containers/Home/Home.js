import React, { Component } from 'react';
import $ from 'jquery';
import { TweenLite, Power2 } from 'gsap';
import './home.scss';

export default class Home extends Component {

  componentDidMount = () => {
    $(window).on('scroll', () => {
      const dy = $(window).scrollTop();
      const home = $(this.home);
      TweenLite.to(home, 0.1, { opacity: 1 - (dy / 600), ease: Power2.easeOut });
    });
  }

  render = () =>
    <section class="home" ref={ node => { this.home = node; } }>
      <div class="home__image" />
    </section>;
}
