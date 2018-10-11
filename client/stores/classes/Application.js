import { observable, computed } from 'mobx';
import $ from 'jquery';
import axios from 'axios';

export default class Application {
  @observable openMessageDialog = false;

  @observable _isLoadedPage = false;

  constructor() {
    $(window).on('load', () => {
      this._isLoadedPage = true;
    });
  }

  @computed
  get isLoadedPage() {
    return this._isLoadedPage;
  }


  toggleDialog = () => {
    if (this.openMessageDialog) this.openMessageDialog = false;
    else this.openMessageDialog = true;
  }

  sendMessage = message => {
    axios.post('/sendMail', message);
  }
}
