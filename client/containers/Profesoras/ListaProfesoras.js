import React from 'react';
import SectionList from '../../components/Section/SectionList';
import { dataProfesoras } from '../../helpers/database';

const ListaProfesoras = () => <SectionList scrollId="id-profesoras"
                                dataList={ dataProfesoras } />;

export default ListaProfesoras;
