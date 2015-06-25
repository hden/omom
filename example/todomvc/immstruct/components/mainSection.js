/** @jsx omom.h */
import omom     from '../../../../index'
import emit     from '../actions/todoAction'
import TodoItem from './todoItem'

const filters = {
  all() { return true }
, active(item) { return !item.get('complete') }
, completed(item) { return item.get('complete') }
}

export default omom.component((root /* cursor */) => {
  const items  = root.cursor('items')
  const filter = filters[root.cursor('filter').deref()]

  let todos          = []
  let areAllComplete = true
  items.forEach((item /* cursor */) => {
    if (filter(item)) {
      // passon sub cursor
      todos.push(<TodoItem {...item} />)
    }
    areAllComplete = areAllComplete && item.get('complete')
  })

  return (
    <section id="main">
      <input
        id="toggle-all"
        type="checkbox"
        onchange={emit.toggleAll.bind(emit, !areAllComplete)}
        checked={areAllComplete}
      />
      <ul id="todo-list">{todos}</ul>
    </section>
  )
})
