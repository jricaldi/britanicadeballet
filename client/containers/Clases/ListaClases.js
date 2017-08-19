import React from 'react';
import SectionList from '../../components/Section/SectionList';
import { dataClases } from '../../helpers/database';


const openMessageDialog = () => console.log('open dialog');

const ListaClases = () => <SectionList scrollId="id-clases"
                            dataList={ dataClases }
                            isClassSection
                            openMessageDialog={ openMessageDialog }
                            title="/ Clases /" />;

export default ListaClases;
