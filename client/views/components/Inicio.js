import React from 'react';
import ListaProfesoras from './Profesoras/ListaProfesoras';
import Clases from './Clases';
import Contacto from './Contacto';
import QuienesSomos from './QuienesSomos';

const Inicio = () =>
  <div>
    <QuienesSomos />
    <ListaProfesoras />
    <Clases />
    <Contacto />
  </div>;

export default Inicio;
