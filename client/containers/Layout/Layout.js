import React from 'react';
import ListaProfesoras from '../Profesoras/ListaProfesoras';
import ListaClases from '../Clases/ListaClases';
import Contacto from '../Contacto/Contacto';
import About from '../About/About';
import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';

const Layout = () =>
  <div>
    <Navigation />
    <Home />
    <About />
    <ListaClases />
    <ListaProfesoras />
    <Contacto />
  </div>;

export default Layout;
