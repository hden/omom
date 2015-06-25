/** @jsx omom.h */
import omom      from '../../../../index'
import emit      from '../actions/todoAction'
import TextInput from './todoTextInput'

const log = window.debug('todomvc:footer')

export default omom.component((items /* cursor */) => {

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
          <a href="#/">
            All
          </a>
        </li>
        {' '}
        <li>
          <a href="#/active">
            Active
          </a>
        </li>
        {' '}
        <li>
          <a href="#/completed">
            Completed
          </a>
        </li>
        {' '}
      </ul>
      {clearCompletedButton}
    </footer>
  )
})
