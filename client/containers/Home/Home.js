import React, { Component } from 'react';
import $ from 'jquery';
import Scroll from 'react-scroll';
import { TweenLite, Power2, Power1 } from 'gsap';
import './home.scss';
import fondoInicio from '../../../static/images/fondo-inicio-2018.jpg';
import caret from '../../../static/images/caret.png';

const scroll = Scroll.animateScroll;

export default class Home extends Component {

  componentDidMount = () => {
    $(window).on('scroll', () => {
      const dy = $(window).scrollTop();
      const home = $(this.home);
      TweenLite.to(home, 0.1, { opacity: 1 - (dy / 600), ease: Power2.easeOut });
    });
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.isLoadedPage) {
      const image = this.image;
      TweenLite.to(image, 2, { opacity: 1, ease: Power1.easeInOut });
    }
  }

  goAboutSection = () => {
    const heightVP = $(window).height();
    scroll.scrollTo(heightVP);
  }

  render = () =>
    <section id="id-home" className="home" ref={ node => (this.home = node) }>
      <div className="home__mainImage">
        <img className="home__mainImage__image" src={ fondoInicio }
                                            alt="Academia Británica de Ballet"
                                            ref={ node => (this.image = node) } />
      </div>
      <div className="home__caret">
        <a className="home__caret__image" onClick={ this.goAboutSection }>
          <img src={ caret } alt="caret" />
        </a>
      </div>
    </section>;
}
