import React, { Component } from "react";
import './profesoras.scss';

const Profesoras = () => {
  return <div class="list-profesoras">
    <div class="profesora">
      <div class="foto">
        <img src="images/profesora-diana.jpg" alt="Diana Untiveros" />
      </div>
      <div class="info">
        <h2>Diana Untiveros Villa</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>;
};

export default Profesoras;
