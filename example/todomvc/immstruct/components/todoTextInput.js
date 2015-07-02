/** @jsx omom.h */
import omom from '../../../../index'

const ENTER_KEY_CODE = 13

// intentionally using pojo as props for demonstration
// this component will always rerender
export default (props = {}) => {
  const onSave = (event) => {
    const el = event.target
    if (el.value && el.value !== '') {
      props.onSave(el.value)
      // clear input value after save
      el.value = ''
    }
  }

  const onChange = (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      onSave(event)
    }
  }

  return (
    <input
      className={props.className}
      id={props.id}
      placeholder={props.placeholder}
      onblur={onSave}
      onkeydown={onChange}
      value={props.value}
      autofocus={true}
    />
  )
}
