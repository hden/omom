/** @jsx omom.h */
import omom  from '../index'
import VNode from 'virtual-dom/vnode/vnode.js'

describe('h', () => {
  const { expect } = chai

  it('should render', () => {
    expect(<div/>).to.be.an.instanceof(VNode)
  })

  it('is a function', () => {
    expect(omom.h).to.be.a('function')
  })

  it('should render child', () => {
    let children = [
      <li/>
    , <li/>
    , <li/>
    ]

    expect(<div>{children}</div>).to.be.an.instanceof(VNode)
  })

  it('should render component', () => {
    let Component = ({foo}) => {
      expect(foo).to.equal('bar')
      return <div>{foo}</div>
    }

    Component = sinon.spy(Component)
    expect(<Component foo={'bar'}/>).to.be.an.instanceof(VNode)
    expect(Component).to.have.property('calledOnce', true)
  })
})
