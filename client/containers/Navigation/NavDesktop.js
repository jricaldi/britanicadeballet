import React, { Component } from "react";
import Scroll from "react-scroll";
import { observer } from "mobx-react";
import Headroom from "headroom.js";
import logo from "../../images/logo.png";
import "./navDesktop.scss";

const Slink = Scroll.Link;

@observer
export default class NavDesktop extends Component {
  componentDidMount() {
    const headroom = new Headroom(this.navDesktop, {
      tolerance: 10,
    });
    headroom.init();
  }

  render() {
    return (
      <div
        className="navDesktop"
        ref={(node) => {
          this.navDesktop = node;
        }}
      >
        <Slink
          to="id-home"
          className="navDesktop__logo"
          smooth="easeInOutCubic"
        >
          <img src={logo} alt="Británica de balletuuuuuu" />
          <span>Academia Británica de Ballet</span>
        </Slink>
        <nav className="navDesktop__navigator">
          <ul>
            <li>
              <Slink to="id-profesoras" smooth="easeInOutCubic">
                Profesoras y Horarios
              </Slink>
            </li>
            <li>
              <Slink to="id-contacto" smooth="easeInOutCubic">
                Contactos
              </Slink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
