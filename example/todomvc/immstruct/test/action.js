import action from '../actions/todoAction'

describe('action', () => {
  const { expect }  = chai

  it('should respons to methods', () => {
    expect(action.create).to.be.a('function')
    expect(action.updateText).to.be.a('function')
    expect(action.toggleComplete).to.be.a('function')
    expect(action.toggleAll).to.be.a('function')
    expect(action.destroy).to.be.a('function')
    expect(action.destroyCompleted).to.be.a('function')
  })
})
