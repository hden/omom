import cx from '../src/cx'

describe('cx', () => {
  const { expect }  = chai
  it('should compose class name', () => {
    expect(cx({foo: true, bar: false, baz: true})).to.equal('foo baz')
  })

  it('should fallback to empty string', () => {
    expect(cx(null)).to.equal('')
  })
})
