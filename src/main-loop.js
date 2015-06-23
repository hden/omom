import raf           from 'raf'
import diff          from 'virtual-dom/diff'
import patch         from 'virtual-dom/patch'
import createElement from 'virtual-dom/create-element'

export default (root, render, options = {}) => {
  // controls flags
  let redrawScheduled        = false
  let inRenderingTransaction = false

  // initial state fn
  return (current) => {
    // v-dom
    inRenderingTransaction = true
    let tree = render(current)
    let el   = createElement(tree, options)
    inRenderingTransaction = false

    root.appendChild(el)
    current = null

    let redraw = () => {
      redrawScheduled = false
      if (current === null) { return }

      // TODO: use a proper mutex or channel
      inRenderingTransaction = true
      let newTree = render(current)
      let patches = diff(tree, newTree, options)
      inRenderingTransaction = false

      el      = patch(el, patches, options)
      tree    = newTree
      current = null
    }

    let update = (next) => {
      if (inRenderingTransaction) {
        throw new Error('can\'t change state while rendering')
      }

      if (current === null && !redrawScheduled) {
        redrawScheduled = true
        raf(redraw)
      }
      // accumulate changes until redraw
      current = next
      return update
    }
    return update
  }
}
