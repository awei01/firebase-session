import extractUser from '@/lib/extractUser'

describe('extractUser()', () => {
  it('called with null returns null', () => {
    expect(extractUser(null)).toBe(null)
  })
  it('called with undefined returns null', () => {
    expect(extractUser(undefined)).toBe(null)
  })
  it('called with string returns null', () => {
    expect(extractUser('foo')).toBe(null)
  })
  it('called with { uid, email, displayName, photoURL, ...rest } returns { uid, email, displayName, photoURL }', () => {
    const user = { uid: 'uid', email: 'email', displayName: 'displayName', photoURL: 'photoURL' }
    expect(extractUser({ ...user, foo: 'foo value', bar: 'bar value' })).toEqual(user)
  })
})
