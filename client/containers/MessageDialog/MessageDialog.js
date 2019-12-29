import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import cn from "classnames";
import $ from "jquery";
import { TweenLite, Power2 } from "gsap";
import "./messageDialog.scss";

@inject("application")
@observer
export default class MessageDialog extends Component {
  closeFormDialog = () => {
    const form = $(this.form);
    const toggleDialog = this.props.application.toggleDialog;
    TweenLite.to(form, 0.5, {
      opacity: 0,
      y: -50,
      ease: Power2.easeOut,
      onComplete: () => toggleDialog()
    });
  };

  sendMessage = () => {
    const message = { name: this.name.value };
    this.props.application.sendMessage(message);
    this.props.application.toggleDialog();
  };

  openForm = () => {
    const form = $(this.form);
    TweenLite.to(form, 0.5, { opacity: 1, y: 50, ease: Power2.easeOut });
  };

  renderDialog = openMessageDialog => {
    const showMessageDialog = openMessageDialog ? "show" : "hide";

    return (
      <div className={cn("messageDialog", showMessageDialog)}>
        <div
          className="messageDialog__form"
          ref={node => {
            this.form = node;
          }}
        >
          <h2 className="messageDialog__form__title">
            / Envianos un mensaje /
          </h2>
          <input
            type="text"
            placeholder="Nombre"
            ref={node => {
              this.name = node;
            }}
          />
          <button onClick={this.sendMessage}>Enviar</button>
          <button onClick={this.closeFormDialog}>Cancelar</button>
        </div>
      </div>
    );
  };

  render() {
    const { openMessageDialog } = this.props.application;
    if (openMessageDialog) {
      this.openForm();
    }
    return this.renderDialog(openMessageDialog);
  }
}
