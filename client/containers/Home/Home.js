import React, { Component } from 'react';
import $ from 'jquery';
import './home.scss';

export default class Home extends Component {

  componentDidMount = () => {
    $(window).bind('scroll', () => {
      const dy = $(window).scrollTop();
      $(this.home).css('opacity', 1 - (dy / 500));
    });
  }

  render = () =>
    <section class="home" ref={ node => { this.home = node; } }>
      <div class="home__image" />
    </section>;
}
