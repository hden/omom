import omom      from '../index'
import Immutable from 'immutable'

describe('component', () => {
  const { expect }  = chai
  const fixture     = {foo: 'bar'}
  const passthrough = (d) => { return d }

  it('is a function', () => {
    expect(omom.component).to.be.a('function')
  })

  it('should render upon init', () => {
    let spy    = sinon.spy(passthrough)
    let render = omom.component(spy)
    let result = render(fixture)

    expect(spy).to.have.property('calledOnce', true)
    expect(result).to.equal(fixture)
  })

  it('should cache result', () => {
    let spy    = sinon.spy(passthrough)
    let render = omom.component(spy)
    render(fixture)
    render(fixture)
    render(fixture)
    let result = render(fixture)

    expect(spy).to.have.property('calledOnce', true)
    expect(result).to.equal(fixture)
  })

  it('should re-render', () => {
    let spy    = sinon.spy(passthrough)
    let render = omom.component(spy)
    render(fixture)
    render(fixture)
    render(fixture)
    const data = {bar: 'baz'}
    render(data)
    render(data)
    render(data)
    let result = render(data)

    expect(spy).to.have.property('calledTwice', true)
    expect(result).to.equal(data)

    result = render(data, ['foo'])
    expect(spy).to.have.property('calledThrice', true)
    expect(result).to.equal(data)
  })

  it('should work with custom equality fn', () => {
    let spy    = sinon.spy(passthrough)
    let is     = sinon.spy(Immutable.is)
    let render = omom.component(spy, is)
    let data   = Immutable.fromJS(fixture)
    // cache result first
    render(data)
    render(data)
    render(data)
    let result = render(data)

    expect(spy).to.have.property('calledOnce', true)
    expect(is).to.have.property('called', true)
    expect(result).to.equal(result)
  })
})
