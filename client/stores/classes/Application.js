import { observable } from 'mobx';

export default class Application {
  @observable openMessageDialog;

  toggleDialog = () => {
    console.log('store => ', this.openMessageDialog);
    if (this.openMessageDialog) this.openMessageDialog = false;
    else this.openMessageDialog = true;
  }
}
