import React from 'react';
import ListaProfesoras from './Profesoras/ListaProfesoras';
import Clases from './Clases/Clases';
import Contacto from './Contacto/Contacto';
import QuienesSomos from './QuienesSomos/QuienesSomos';
import Home from './Home/Home';
import Header from '../common/Header';
import Layout from '../common/Layout';

const Inicio = () =>
  <Layout>
    <Header />
    <Home />
    <QuienesSomos />
    <ListaProfesoras />
    <Clases />
    <Contacto />
  </Layout>;

export default Inicio;
