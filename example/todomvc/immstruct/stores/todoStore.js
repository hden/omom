import uuid      from 'uuid'
import immstruct from 'immstruct'
import immutable from 'immutable'
import subscribe from '../actions/todoAction'

const toggle   = x => !x
const struct   = immstruct({ items: {} })
const itemsRef = struct.reference('items')

// exports a reference to the current state
export default struct.reference()

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
})
