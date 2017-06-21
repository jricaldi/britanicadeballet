import React, { Component } from 'react';
import $ from 'jquery';
import { TweenLite, Power2, Power1 } from 'gsap';
import './home.scss';
import fondoInicio from '../../../static/images/fondo-inicio.jpg';

export default class Home extends Component {

  componentDidMount = () => {
    $(window).on('scroll', () => {
      const dy = $(window).scrollTop();
      const home = $(this.home);
      TweenLite.to(home, 0.1, { opacity: 1 - (dy / 600), ease: Power2.easeOut });
    });

    const bgimage = new Image();
    bgimage.src = fondoInicio;
    const image = $(this.image);
    image.css('opacity', '0');
    $(bgimage).load(function render() {
      const src = $(this).attr('src');
      image.css('background-image', `url("${src}")`);
      TweenLite.to(image, 2, { opacity: 1, ease: Power1.easeInOut });
    });
  }

  render = () =>
    <section class="home" ref={ node => { this.home = node; } }>
      <div class="home__image" ref={ node => { this.image = node; } } />
    </section>;
}
