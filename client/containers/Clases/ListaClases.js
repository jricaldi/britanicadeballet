import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import SectionList from "../../components/Section/SectionList";
import { dataClases } from "../../helpers/database";

@inject("application")
@observer
export default class ListaClases extends Component {
  constructor() {
    super();
    this.state = {
      dataClases: dataClases.filter(clase => clase.showClass)
    };
  }

  openMessageDialog = () => {
    this.props.application.toggleDialog();
  };

  render() {
    return (
      <SectionList
        scrollId="id-clases"
        dataList={this.state.dataClases}
        isClassSection
        openMessageDialog={this.openMessageDialog}
      />
    );
  }
}
