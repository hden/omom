import Emitter from 'eventemitter3'

export default (actions = [], emitter = new Emitter()) => {
  let helper = (reciever) => {
    actions.forEach((action) => {
      let method = action.replace(/./, c => 'on' + c[0].toUpperCase())
      if (typeof reciever[method] === 'function') {
        emitter.on(action, reciever[method].bind(reciever))
      }
    })
    return helper
  }

  helper.call = helper

  actions.forEach((action) => {
    helper[action] = emitter.emit.bind(emitter, action)
  })

  return helper
}
