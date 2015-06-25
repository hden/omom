/** @jsx omom.h */
import omom      from '../../../../index'
import emit      from '../actions/todoAction'
import TextInput from './todoTextInput'

const log = window.debug('todomvc:footer')

export default omom.component((root /* cursor */) => {
  const items   = root.cursor('items')
  const filter  = root.cursor('filter').deref()
  const total   = items.size
  let completed = 0
  items.forEach((item) => {
    if (item.get('complete')) {
      completed++
    }
  })

  log('total = %s; completed = %s', total, completed)

  let clearCompletedButton
  if (completed > 0) {
    clearCompletedButton = (
      <button id="clear-completed" onclick={emit.destroyCompleted}>
        {`Clear completed (${completed})`}
      </button>
    )
  }

  return (
    <footer id="footer">
      <span id="todo-count">
        <strong>
          {`${ total - completed }`}
        </strong>
        {` ${ total - completed === 1 ? 'item' : 'items' } left`}
      </span>
      <ul id="filters">
        <li>
          <a
            href="#/"
            className={omom.cx({ selected: filter === 'all' })}
            onclick={emit.setFilter.bind(emit, 'all')}
            >
            All
          </a>
        </li>
        {' '}
        <li>
          <a
            href="#/active"
            className={omom.cx({ selected: filter === 'active' })}
            onclick={emit.setFilter.bind(emit, 'active')}
            >
            Active
          </a>
        </li>
        {' '}
        <li>
          <a
            href="#/completed"
            className={omom.cx({ selected: filter === 'completed' })}
            onclick={emit.setFilter.bind(emit, 'completed')}
            >
            Completed
          </a>
        </li>
        {' '}
      </ul>
      {clearCompletedButton}
    </footer>
  )
})
