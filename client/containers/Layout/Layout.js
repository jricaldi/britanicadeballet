import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import cn from "classnames";
import $ from "jquery";
import aos from "aos";
import ListaProfesoras from "../Profesoras/ListaProfesoras";
import ListaClases from "../Clases/ListaClases";
import Contacto from "../Contacto/Contacto";
import About from "../About/About";
import Home from "../Home/Home";
import Navigation from "../Navigation/Navigation";
import MessageDialog from "../MessageDialog/MessageDialog";

import "./layout.scss";
import "aos/dist/aos.css";

@inject("application")
@observer
export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      aos.init();
    }, 1500);
  }

  render() {
    const { isLoadedPage } = this.props.application;
    const showMain = isLoadedPage ? "show" : "hide";
    const showLoading = !isLoadedPage ? "show" : "hide";
    return (
      <div>
        <div className={cn(showMain)}>
          <MessageDialog />
          <Navigation />
          <Home isLoadedPage={isLoadedPage} />
          <About />
          <ListaClases />
          <ListaProfesoras />
          <Contacto />
        </div>
        <div className={cn("loading", showLoading)}>
          <div className="loading__circle">
            <div />
          </div>
          <div className="loading__text">
            <div>Británica de Ballet</div>
          </div>
        </div>
        ;
      </div>
    );
  }
}
