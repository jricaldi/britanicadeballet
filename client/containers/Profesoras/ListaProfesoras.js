import React from 'react';
import Profesora from './Profesora';
import { dataProfesoras } from '../../helpers/database';
import './listaProfesoras.scss';

const renderProfesoras = listaProfesoras =>
  listaProfesoras.map((profesora, index) => <Profesora info={ profesora } key={ index } />);

const ListaProfesoras = () => {
  const listaProfesoras = dataProfesoras;

  return <div id="id-profesoras" class="list-profesoras">
    { renderProfesoras(listaProfesoras) }
  </div>;
};

export default ListaProfesoras;
