import { observable } from "mobx";

export default class Application {
  @observable _isLoadedPage = false;

  constructor() {
    window.addEventListener("load", () => {
      this._isLoadedPage = true;
    });
  }

  get isLoadedPage() {
    return this._isLoadedPage;
  }
}
