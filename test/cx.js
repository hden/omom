import cx from '../src/cx'

describe('cx', () => {
  const { expect }  = chai
  it('should compose class name', () => {
    expect(cx({foo: true, bar: false, baz: true})).to.equal('foo baz')
  })
})
