/** @jsx omom.h */
import omom      from '../../../../index'
import emit      from '../actions/todoAction'
import TextInput from './todoTextInput'

export default omom.component((item /* cursor */) => {

  const className = omom.cx({
    completed: item.get('complete')
  , editing  : item.get('editing')
  })

  const id     = item.get('id')
  const onSave = (text = '') => {
    emit.updateText(id, text)
    emit.toggleEditing(id, false)
  }

  let input
  if (item.get('editing')) {
    input = (
      <TextInput
        className="edit"
        onSave={onSave}
        value={item.get('text')}
      />
    )
  }

  return (
    <li className={className} key={id}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={item.get('complete')}
          onchange={emit.toggleComplete.bind(emit, id)}
        />
        <label ondblclick={emit.toggleEditing.bind(emit, id, true)}>
          {item.get('text')}
        </label>
        <button className="destroy" onclick={emit.destroy.bind(null, id)} />
      </div>
      {input}
    </li>
  )
})
