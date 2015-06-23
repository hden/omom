export default (render, eq = Object.is) => {
  let currentProps, currentChildren, cache
  return (nextProps, nextChildren) => {
    if (!cache || !eq(currentProps, nextProps || !eq(currentChildren, nextChildren))) {
      currentProps = nextProps
      currentChildren = nextChildren
      cache = render(currentProps, currentChildren)
    }
    return cache
  }
}
