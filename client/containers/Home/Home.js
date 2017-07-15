import React, { Component } from 'react';
import $ from 'jquery';
import Scroll from 'react-scroll';
import { TweenLite, Power2, Power1 } from 'gsap';
import './home.scss';
import fondoInicio from '../../../static/images/fondo-inicio.jpg';
import shoes from '../../../static/images/shoes.png';

const scroll = Scroll.animateScroll;

export default class Home extends Component {

  componentDidMount = () => {
    $(window).on('scroll', () => {
      const dy = $(window).scrollTop();
      const home = $(this.home);
      TweenLite.to(home, 0.1, { opacity: 1 - (dy / 600), ease: Power2.easeOut });
    });
  }

  imageLoaded = () => {
    const image = this.image;
    TweenLite.to(image, 2, { opacity: 1, ease: Power1.easeInOut });
  }

  goAboutSection = () => {
    const heightVP = $(window).height();
    scroll.scrollTo(heightVP);
  }

  render = () =>
    <section id="id-home" class="home" ref={ node => (this.home = node) }>
      <div class="home__mainImage">
        <img class="home__mainImage__image" src={ fondoInicio }
                                            alt="Academia Británica de Ballet"
                                            onLoad={ this.imageLoaded }
                                            ref={ node => (this.image = node) } />
      </div>
      <img class="home__caret" src={ shoes } alt="Scroll Down" onClick={ this.goAboutSection } />
    </section>;
}
