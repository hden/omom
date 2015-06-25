import uuid      from 'uuid'
import immstruct from 'immstruct'
import immutable from 'immutable'
import subscribe from '../actions/todoAction'

// the store can be implemented by any framework of your choice
// omom has no opinion on the choice of tools
// here we use [immustruct](https://github.com/omniscientjs/immstruct/) for demo
const toggle   = x => !x
const struct   = immstruct({ items: {}, filter: 'all' })
const rootRef  = struct.reference()
const itemsRef = struct.reference('items')

// exports a reference to the current state
export default rootRef

subscribe({
  updateAll(updates) {
    itemsRef.cursor().update((items) => {
      return items.map(item => item.merge(updates))
    })
  }

, onCreate(text = '', complete = false, editing = false) {
    text = text.trim()
    if (text === '') { return false }

    const id = uuid.v4()
    itemsRef.cursor().set(id, immutable.fromJS({ id, text, complete, editing }))
  }

, onUpdateText(id, text = '') {
    text = text.trim()
    if (text === '') { return false }

    itemsRef.cursor().setIn([id, 'text'], text)
  }

, onToggleComplete(id) {
    itemsRef.cursor([id, 'complete']).update(toggle)
  }

, onToggleEditing(id, editing = true) {
    itemsRef.cursor().update((items) => {
      return items.map(item => item.set('editing', item.get('id') === id ? editing : false))
    })
  }

, onToggleAll(complete = true) {
    this.updateAll({ complete })
  }

, onDestroy(id) {
    itemsRef.cursor().update((items) => {
      return items.delete(id)
    })
  }

, onDestroyCompleted() {
    itemsRef.cursor().update((items) => {
      return items.filterNot(item => item.get('complete'))
    })
  }

  // the state change can be triggered by any router of your choice
  // omom has no opinion on the choice of tools
, onSetFilter(name = 'all') {
    rootRef.cursor().set('filter', name)
  }
})
