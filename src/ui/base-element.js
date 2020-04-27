import $ from 'jquery';

export class BaseElement {
  constructor() {
    this.element = null; // jquery element
  }

  appendToElement(el) {
    this.createElement();
    el.append(this.element);
  }

  createElement() {
    const s = this.getElementString();
    this.element = $(s);
    this.enableJS();
  }

  // eslint-disable-next-line class-methods-use-this
  getElementString() {
    // eslint-disable-next-line no-throw-literal
    throw 'Please override getElementString() in BaseElement';
    // throw new Error('Please override getElementString() in BaseElement');
  }

  enableJS() {
    componentHandler.upgradeElement(this.element[0]);
  }
}
