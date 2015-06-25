import 'babel/polyfill'
import omom from '../../../index'
import app  from './components/app'
import ref  from './stores/todoStore'

const render = omom.loop(document.getElementById('todoapp'), app)

// render with initial state
let update = render(ref.cursor())

// update v-dom upon every state change
ref.observe(() => {
  update = update(ref.cursor())
})
