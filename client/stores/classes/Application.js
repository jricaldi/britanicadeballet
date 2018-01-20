import { observable } from 'mobx';
import $ from 'jquery';
import axios from 'axios';

export default class Application {
  @observable openMessageDialog = false;
  @observable isLoadedPage = false;

  constructor() {
    $(window).on('load', () => {
      this.isLoadedPage = true;
    });
  }

  toggleDialog = () => {
    if (this.openMessageDialog) this.openMessageDialog = false;
    else this.openMessageDialog = true;
  }

  sendMessage = message => {
    axios.post('/sendMail', message);
  }
}
