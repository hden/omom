import debug   from 'debug'
import Emitter from 'eventemitter3'
import omom    from '../../../../index'

window.debug = debug

const spy  = new Emitter()
const emit = spy.emit
const log  = debug('todomvc:dispatcher')

debug.enable('todomvc:*')

// useful to log events on the console
spy.emit = (...args) => {
  log(...args)
  return emit.apply(spy, args)
}

const todoActions = [
  'create'
, 'updateText'
, 'toggleComplete'
, 'toggleEditing'
, 'toggleAll'
, 'destroy'
, 'destroyCompleted'
]

export default omom.action(todoActions, spy)
