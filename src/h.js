import h from 'virtual-dom/h'

// compatibility helper with JSX produced by babel.js
export default (tag, props = {}, ...children) => {
  return typeof tag !== 'function' ? h(tag, props, children) : tag(props, children)
}
