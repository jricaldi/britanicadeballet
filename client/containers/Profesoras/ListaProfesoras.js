import React from 'react';
import SectionList from '../../components/Section/SectionList';
import { dataProfesoras } from '../../helpers/database';

const ListaProfesoras = () => <SectionList scrollId="id-profesoras"
                                dataList={ dataProfesoras }
                                title="/ Profesoras /" />;

export default ListaProfesoras;
