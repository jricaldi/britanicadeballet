import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './messageDialog.scss';

@inject('application')
@observer
export default class MessageDialog extends Component {

  closeFormDialog = () => {
    this.props.application.toggleDialog();
  }

  sendMessage = () => {
    const message = { name: this.name.value };
    this.props.application.sendMessage(message);
    this.props.application.toggleDialog();
  }

  renderDialog = openMessageDialog => {
    if (!openMessageDialog) return null;
    return <div class="messageDialog">
      <div class="messageDialog__form">
        <h2 class="messageDialog__form__title">/ Envianos un mensaje /</h2>
        <input type="text" placeholder="Nombre" ref={ node => { this.name = node; } } />
        <button onClick={ this.sendMessage }>Enviar</button>
        <button onClick={ this.closeFormDialog }>Cancelar</button>
      </div>
    </div>;
  }

  render = () => {
    const { openMessageDialog } = this.props.application;
    return this.renderDialog(openMessageDialog);
  }
}
