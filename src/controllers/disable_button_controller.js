import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['reset', 'button']

  connect() {
    console.log(this.resetTarget);
  }

  disable() {
    // this.element => HTML tag that holds the DATA-CONTROLLER attribute
    console.log(this.element);
    this.buttonTarget.innerText = 'Ready!';
    this.buttonTarget.setAttribute('disabled', true);
    this.resetTarget.classList.remove('d-none');
  }

  reset() {
    this.resetTarget.classList.add('d-none');
    this.buttonTarget.removeAttribute('disabled')
    this.buttonTarget.innerText = 'Click me!'
  }
}
