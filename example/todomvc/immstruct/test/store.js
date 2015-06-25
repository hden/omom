import immutable from 'immutable'
import ref    from '../stores/todoStore'
import action from '../actions/todoAction'

describe('store', () => {
  const { expect }  = chai

  const deref = (...path) => {
    const o = ref.cursor(path).deref()
    if (o) {
      return o.toJS()
    } else {
      return o
    }
  }

  const id = 'foobar'

  beforeEach(() => {
    ref.cursor('items').set(id, immutable.fromJS({ id, text: 'foobar', complete: false, editing: false }))
  })

  afterEach(() => {
    ref.cursor().set('items', new immutable.Map())
  })

  it('should export a reference', () => {
    expect(ref).to.be.ok
  })

  it('should create', () => {
    action.create('foo')
    const items = deref('items')
    expect(items).to.be.an('object')
    const newId = Object.keys(items)[1]
    expect(items[newId]).to.deep.equal({ id: newId, text: 'foo', complete: false, editing: false })
  })

  it('should update text', () => {
    action.updateText(id, 'baz')
    const item = deref('items', id)
    expect(item).to.deep.equal({ id, text: 'baz', complete: false, editing: false })
  })

  it('should toggle complete', () => {
    action.toggleComplete(id)
    const item = deref('items', id)
    expect(item).to.deep.equal({ id, text: 'foobar', complete: true, editing: false })
  })

  it('should toggle editing', () => {
    action.toggleEditing(id)
    const item = deref('items', id)
    expect(item).to.deep.equal({ id, text: 'foobar', complete: false, editing: true })
  })

  it('should toggle all', () => {
    action.toggleAll(true)
    const item = deref('items', id)
    expect(item).to.deep.equal({ id, text: 'foobar', complete: true, editing: false })
  })

  it('should destroy', () => {
    action.destroy(id)
    const item = deref('items', id)
    expect(item).to.be.undefined
  })

  it('should destroy completed', () => {
    ref.cursor('items').set('completed', immutable.fromJS({ id: 'completed', text: 'completed', complete: true, editing: false }))
    action.destroyCompleted()
    const item = deref('items', 'completed')
    expect(item).to.be.undefined
  })

})
