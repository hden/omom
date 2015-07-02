/** @jsx omom.h */
import omom from '../../index'

export default class Input extends HTMLDivElement {
  createdCallback() {
    this.el = this.createShadowRoot()
    this.appendChild(this.el)
  }
  attachedCallback() {
    omom.loop(this.el, this.render.bind(this))()
  }
  render() {
    return <input defaultValue="type something" onchange={this.onchange.bind(this)} />
  }
  onchange(event) {
    if (this.emit) {
      // message are sent through a channel given by the parent component.
      this.emit(event.target.value)
    }
  }
}
