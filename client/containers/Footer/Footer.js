import React from 'react';
import './footer.scss';
import facebookIcon from '../../../static/images/icon_facebook.svg';
import instagramIcon from '../../../static/images/icon_instagram.svg';
import youtubeIcon from '../../../static/images/icon_youtube.svg';

const Footer = () =>
  <aside class="footer">
    <div class="footer__social">
      <a href="https://www.facebook.com/britanicadeballet" target="_blank" rel="noopener noreferrer">
        <img src={ facebookIcon } alt="facebook" />
      </a>
      <a href="https://www.instagram.com/britanicadeballet/" target="_blank" rel="noopener noreferrer">
        <img src={ instagramIcon } alt="instagram" />
      </a>
      <a href="https://www.youtube.com/c/Britanicadeballet" target="_blank" rel="noopener noreferrer">
        <img src={ youtubeIcon } alt="youtube" />
      </a>
    </div>
    <div class="footer__phone">
      <a href="tel:+5114481113">Teléfono: +51 1 448-1113</a>
    </div>
    <div class="footer__address">
      <p>Av. Alfredo Franco 200, Urb. Chama, Surco - Lima</p>
    </div>
  </aside>;

export default Footer;
