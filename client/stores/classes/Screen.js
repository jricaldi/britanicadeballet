import { observable, computed } from 'mobx';

export default class Screen {
  @observable innerWidth;

  constructor() {
    this.innerWidth = window.innerWidth;
    window.onresize = e => {
      this.innerWidth = e.currentTarget.innerWidth;
    };
  }

  @computed get isDownXSmall() {
    return this.innerWidth <= 576;
  }

  @computed get isDownSmall() {
    return this.innerWidth <= 768;
  }

  @computed get isDownMedium() {
    return this.innerWidth <= 992;
  }

  @computed get isDownlarge() {
    return this.innerWidth <= 1200;
  }
}
