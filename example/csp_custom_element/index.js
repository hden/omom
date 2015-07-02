/** @jsx omom.h */
import 'babelify/polyfill'

import chan from 'chan'
import text from './text'
import input from './input'
import omom from '../../index'

// register custom elements
document.registerElement('omom-input', input)
document.registerElement('omom-text', text)

// Assuming golang-like CSP where each component run in its own coroutine,
// communication between components is done via channels.
const ch = chan()

// main app
const app = () => {
  // Here we create custom elements just like ordinary HTML elements.
  return (
    <div>
      <omom-input emit={ch} />
      <omom-text outlet={ch} />
    </div>
  )
}

omom.loop(document.body, app)()
