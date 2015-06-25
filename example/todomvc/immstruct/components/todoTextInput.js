/** @jsx omom.h */
import omom from '../../../../index'

const ENTER_KEY_CODE = 13

// intentionally using pojo as props for demonstration
// this component will always rerender
export default (props = {}) => {
  const onSave = (el) => {
    if (el.target.value && el.target.value !== '') {
      props.onSave(el.target.value)
      // clear input value after save
      el.target.value = ''
    }
  }

  const onChange = (el) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      onSave(el)
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
