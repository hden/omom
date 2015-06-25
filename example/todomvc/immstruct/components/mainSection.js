/** @jsx omom.h */
import omom     from '../../../../index'
import emit     from '../actions/todoAction'
import TodoItem from './todoItem'

export default omom.component((items /* cursor */) => {

  let todos = []
  let areAllComplete = true
  items.forEach((item /* cursor */) => {
    // passon sub cursor
    todos.push(<TodoItem {...item} />)
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
