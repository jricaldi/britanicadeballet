import { observable } from "mobx";

export default class Screen {
  @observable innerWidth;

  constructor() {
    this.innerWidth = window.innerWidth;
    window.onresize = e => {
      this.innerWidth = e.currentTarget.innerWidth;
    };
  }

  get isDownXSmall() {
    return this.innerWidth <= 576;
  }

  get isDownSmall() {
    return this.innerWidth <= 768;
  }

  get isDownMedium() {
    return this.innerWidth <= 992;
  }

  get isDownlarge() {
    return this.innerWidth <= 1200;
  }
}
