import React, { PureComponent } from "react";
import Scroll from "react-scroll";
import $ from "jquery";
import logo from "../../images/logo.png";
import "./navMobile.scss";

const Slink = Scroll.Link;

export default class NavMobile extends PureComponent {
  showMobileNav = () => {
    $(this.mainNav).fadeToggle(500);
    $(this.topMenu).toggleClass("top-animate");
    $(this.midMenu).toggleClass("mid-animate");
    $(this.bottomMenu).toggleClass("bottom-animate");
  };

  render() {
    return (
      <div className="navMobile">
        <Slink to="id-home" className="navMobile__logo" smooth="easeInOutCubic">
          <img src={logo} alt="Británica de ballet" />
        </Slink>
        <nav role="navigation">
          <ul className="navMobile__menu" ref={node => (this.mainNav = node)}>
            <li>
              <Slink
                to="id-clases-en-linea"
                offset={-75}
                smooth="easeInOutCubic"
                onClick={this.showMobileNav}
              >
                Clases en línea
              </Slink>
            </li>
            <li>
              <Slink
                to="id-clases-ballet"
                offset={-75}
                smooth="easeInOutCubic"
                onClick={this.showMobileNav}
              >
                Ballet
              </Slink>
            </li>
            <li>
              <Slink
                to="id-clases-musica"
                offset={-75}
                smooth="easeInOutCubic"
                onClick={this.showMobileNav}
              >
                Música
              </Slink>
            </li>
            <li>
              <Slink
                to="id-profesoras"
                offset={-75}
                smooth="easeInOutCubic"
                onClick={this.showMobileNav}
              >
                Profesoras
              </Slink>
            </li>
            <li>
              <Slink
                to="id-contacto"
                offset={-75}
                smooth="easeInOutCubic"
                onClick={this.showMobileNav}
              >
                Contactos
              </Slink>
            </li>
            <div className="navMobile__menu__logo">
              <Slink
                to="id-home"
                smooth="easeInOutCubic"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={logo}
                  alt="Británica de ballet"
                  onClick={this.showMobileNav}
                />
              </Slink>
            </div>
          </ul>
          <div onClick={this.showMobileNav} className="navMobile__wrap" />
          <div className="navMobile__action">
            <a className="navMobile__action__icon">
              <div
                className="menui top-menu"
                ref={node => (this.topMenu = node)}
              />
              <div
                className="menui mid-menu"
                ref={node => (this.midMenu = node)}
              />
              <div
                className="menui bottom-menu"
                ref={node => (this.bottomMenu = node)}
              />
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
