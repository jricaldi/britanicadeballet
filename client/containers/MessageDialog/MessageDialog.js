import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './messageDialog.scss';

@inject('application')
@observer
export default class MessageDialog extends Component {

  closeFormDialog = () => {
    this.props.application.toggleDialog();
  }

  renderDialog = openMessageDialog => {
    console.log('dialog =>', openMessageDialog);
    if (!openMessageDialog) return null;
    return <div class="messageDialog" >
      <div>
        <input type="text" placeholder="Nombre" />
        <button onClick={ this.closeFormDialog }> Cerrar </button>
      </div>
    </div>;
  }

  render = () => {
    const { openMessageDialog } = this.props.application;
    return this.renderDialog(openMessageDialog);
  }
}
