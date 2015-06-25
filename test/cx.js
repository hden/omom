import omom from '../index'

describe('cx', () => {
  const { expect }  = chai
  it('should compose class name', () => {
    expect(omom.cx({foo: true, bar: false, baz: true})).to.equal('foo baz')
  })

  it('should fallback to empty string', () => {
    expect(omom.cx(null)).to.equal('')
  })
})
