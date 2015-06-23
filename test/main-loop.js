/** @jsx h */
import raf    from 'raf'
import helper from './helper'
import h      from '../src/h'
import loop   from '../src/main-loop'

describe('main-loop', () => {
  const { expect } = chai
  let cleanup, el

  beforeEach(() => {
    let o = helper.sandbox()
    el = o.el
    cleanup = o.cleanup
  })

  afterEach(() => {
    cleanup()
  })

  it('is a function', () => {
    expect(loop).to.be.a('function')
  })

  it('can set up the main loop', (done) => {
    let data = {
      fruits: ['apple', 'banana']
    , name  : 'Steve'
    }

    const render = (props) => {
      const fruits = props.fruits.map(d => <li><span>{d}</span></li>)

      return (
        <div>
          <span>hello</span>
          <span className="name">{props.name}</span>
          <ul>
            {fruits}
          </ul>
        </div>
      )
    }

    let createInitialState = loop(el, render)
    expect(createInitialState).to.be.a('function')

    let update   = createInitialState(data)
    let expected = `
    <div>
      <span>hello</span>
      <span class="name">Steve</span>
      <ul>
        <li>
          <span>apple</span>
        </li>
        <li>
          <span>banana</span>
        </li>
      </ul>
    </div>
    `.replace(/\n|\ {2,}/g, '')

    expect($(el)).to.have.html(expected)
    expect(update).to.be.a('function')

    // mutate state
    data.fruits.push('cherry')
    data.name = 'Stevie'
    update = update(data)

    expected = `
    <div>
      <span>hello</span>
      <span class="name">Stevie</span>
      <ul>
        <li>
          <span>apple</span>
        </li>
        <li>
          <span>banana</span>
        </li>
        <li>
          <span>cherry</span>
        </li>
      </ul>
    </div>
    `.replace(/\n|\ {2,}/g, '')

    raf(() => {
      expect($(el)).to.have.html(expected)
      expect(update).to.be.a('function')
      done()
    })
  })
})
