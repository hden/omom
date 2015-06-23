/** @jsx h */
import h     from '../src/h'
import VNode from 'virtual-dom/vnode/vnode.js'

describe('h', () => {
  const { expect } = chai

  it('should render', () => {
    expect(<div/>).to.be.an.instanceof(VNode)
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
