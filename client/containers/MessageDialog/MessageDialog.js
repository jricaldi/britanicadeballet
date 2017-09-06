import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import $ from 'jquery';
import { TweenLite, Power2 } from 'gsap';
import './messageDialog.scss';

@inject('application')
@observer
export default class MessageDialog extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     form: $(this.)
  //   }
  // }

  closeFormDialog = () => {
    const form = $(this.form);
    const teen = TweenLite.to(form, 0.5, { opacity: 0, y: -50, ease: Power2.easeOut })
    console.log(teen);

    // .onComplete(function () {
    //   console.log('termino');
    //   this.props.application.toggleDialog();
    // });
  }

  sendMessage = () => {
    const message = { name: this.name.value };
    this.props.application.sendMessage(message);
    this.props.application.toggleDialog();
  }

  openForm = () => {
    const form = $(this.form);
    TweenLite.to(form, 0.5, { opacity: 1, y: 50, ease: Power2.easeOut });
  }

  renderDialog = openMessageDialog => {
    const showMessageDialog = (openMessageDialog && 'show') || 'hide';

    return <div class={ `messageDialog ${showMessageDialog}` } >
      <div class="messageDialog__form" ref={ node => { this.form = node; } }>
        <h2 class="messageDialog__form__title">/ Envianos un mensaje /</h2>
        <input type="text" placeholder="Nombre" ref={ node => { this.name = node; } } />
        <button onClick={ this.sendMessage }>Enviar</button>
        <button onClick={ this.closeFormDialog }>Cancelar</button>
      </div>
    </div>;
  }


  render = () => {
    const { openMessageDialog } = this.props.application;
    if (openMessageDialog) {
      this.openForm();
    }
    return this.renderDialog(openMessageDialog);
  }
}
