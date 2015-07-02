/** @jsx omom.h */
import co from 'co'
import omom from '../../index'

export default class Text extends HTMLDivElement {
  createdCallback() {
    this.el = this.createShadowRoot()
    this.appendChild(this.el)
  }
  attachedCallback() {
    // initial state
    let value  = 'and this message will be updated'
    let update = omom.loop(this.el, this.render)(value)
    if (!this.outlet) { return false }
    const ch = this.outlet

    // Let's kick start our own run-loop (a coroutine)
    co(function *() {
      while (!ch.done()) {
        // The run-loop is blocked until a message is sent through the channel.
        value = yield ch
        if (value !== ch.empty) {
          // Update the shadow DOM
          update(value)
        }
      }
    })
  }
  render(value) {
    // This is rendered in a shadow DOM, if you run the following code
    // `document.getElementById('foo')` it will return null
    return <div id="foo">{value}</div>
  }
}
