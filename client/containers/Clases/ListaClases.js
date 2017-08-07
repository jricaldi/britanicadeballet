import React from 'react';
import SectionList from '../../components/Section/SectionList';
import { dataClases } from '../../helpers/database';

const ListaClases = () => <SectionList scrollId="id-clases"
                            dataList={ dataClases }
                            isClassSection
                            title="/ Clases /" />;

export default ListaClases;
