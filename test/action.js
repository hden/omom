import createActions from '../src/action'
import Emitter       from 'eventemitter3'

describe('action', () => {
  const { expect }  = chai

  it('is a function', () => {
    expect(createActions).to.be.a('function')
  })

  it('expose actions as methods', () => {
    let action = createActions(['foo', 'bar'])
    expect(action.foo).to.be.a('function')
    expect(action.bar).to.be.a('function')
  })

  it('works with custom event-emitter', () => {
    let emitter = new Emitter()
    sinon.spy(emitter, 'emit')

    let action = createActions(['foo'], emitter)
    action.foo('bar', 'baz')

    expect(emitter.emit.calledWith('foo', 'bar', 'baz')).to.be.true
  })

  it('dispatch actions', () => {
    let action = createActions(['foo', 'bar'])
    let store  = {
      onFoo: sinon.spy()
    , onBar: sinon.spy()
    }

    expect(action).to.be.a('function')
    action(store)

    action.foo('FOO')
    expect(store.onFoo).to.have.property('calledOnce', true)
    expect(store.onFoo.calledWith('FOO'))

    action.bar('BAR', 'BAZ')
    expect(store.onBar).to.have.property('calledOnce', true)
    expect(store.onBar.calledWith('BAR', 'BAZ'))
  })
})
