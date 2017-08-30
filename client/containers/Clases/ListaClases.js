import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import SectionList from '../../components/Section/SectionList';
import { dataClases } from '../../helpers/database';


@inject('application')
@observer
export default class ListaClases extends Component {

  openMessageDialog = () => {
    this.props.application.toggleDialog();
  }

  render = () =>
    <SectionList scrollId="id-clases"
      dataList={ dataClases }
      isClassSection
      openMessageDialog={ this.openMessageDialog } />;

}
