import React from 'react';
import ListaProfesoras from '../Profesoras/ListaProfesoras';
import Clases from '../Clases/Clases';
import Contacto from '../Contacto/Contacto';
import About from '../About/About';
import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';

const Layout = () =>
  <div>
    <Navigation />
    <Home />
    <About />
    <ListaProfesoras />
    { /*
      <Clases />
      <Contacto />
    */ }
  </div>;

export default Layout;
