import { observable } from 'mobx';
import axios from 'axios';

export default class Application {
  @observable openMessageDialog;

  toggleDialog = () => {
    if (this.openMessageDialog) this.openMessageDialog = false;
    else this.openMessageDialog = true;
  }

  sendMessage = message => {
    axios.post('/sendMail', message);
  }
}
