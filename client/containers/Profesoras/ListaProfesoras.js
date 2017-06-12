import React from 'react';
import Profesora from './Profesora';
import { dataProfesoras } from '../../helpers/database';
import './listaProfesoras.scss';

const renderProfesoras = listaProfesoras =>
  listaProfesoras.map((profesora, index) => <Profesora info={ profesora } key={ index } />);

const ListaProfesoras = () => {
  const listaProfesoras = dataProfesoras;

  return <section id="id-profesoras" class="listaProfesoras">
    { renderProfesoras(listaProfesoras) }
  </section>;
};

export default ListaProfesoras;
