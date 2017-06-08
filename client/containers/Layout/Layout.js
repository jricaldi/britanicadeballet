import React from 'react';
import ListaProfesoras from '../Profesoras/ListaProfesoras';
import Clases from '../Clases/Clases';
import Contacto from '../Contacto/Contacto';
import QuienesSomos from '../QuienesSomos/QuienesSomos';
import Home from '../Home/Home';
import Header from '../../components/Header/Header';

const Layout = () =>
  <div>
    <Header />
    <Home />
    <QuienesSomos />
    <ListaProfesoras />
    <Clases />
    <Contacto />
  </div>;

export default Layout;
