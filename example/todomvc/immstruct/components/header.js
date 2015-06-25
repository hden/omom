/** @jsx omom.h */
import omom      from '../../../../index'
import emit      from '../actions/todoAction'
import TextInput from './todoTextInput'

export default omom.component(() => {
  return (
    <header id="header">
      <h1>todos</h1>
      <TextInput
        id="new-todo"
        placeholder="What needs to be done?"
        onSave={emit.create}
      />
    </header>
  )
})
