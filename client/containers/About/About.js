import React from "react";
import { observer } from "mobx-react";
import Scroll from "react-scroll";
import "./about.scss";

const Element = Scroll.Element;

const About = () => (
  <section className="about">
    <Element id="id-about">
      <div className="about__text">
        <h1>Academia Británica de Ballet</h1>
        <h2>
          <span>64 años</span> formando bailarinas
        </h2>
      </div>
    </Element>
  </section>
);

export default observer(About);
