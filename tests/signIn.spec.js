import { signIn } from '@'

const auth = {
  signInWithPopup () {}
}

describe('signIn()', () => {
  const providerSpy = jasmine.createSpy('provider')
  beforeEach(() => {
    providerSpy.calls.reset()
    spyOn(auth, 'signInWithPopup').and.returnValue(Promise.resolve({}))
  })
  it('called with [auth, makeProvider] makeProvider() with []', () => {
    signIn(auth, providerSpy)
    expect(providerSpy).toHaveBeenCalled()
  })
  it('called with [auth, makeProvider] when makeProvider() returns provider calls auth.signInWithPopup() with provider', () => {
    providerSpy.and.returnValue('provider instance')
    signIn(auth, providerSpy)
    expect(auth.signInWithPopup).toHaveBeenCalledWith('provider instance')
  })
  describe('auth.signInWithPopup() promise', () => {
    it('resolves with { user: falsey }, resolves with null', (done) => {
      auth.signInWithPopup.and.returnValue(Promise.resolve({ user: false }))
      signIn(auth, providerSpy).then((result) => {
        expect(result).toBe(null)
        done()
      })
    })
    it('resolves with { user: { uid, email, displayName, photoURL, ...rest } }, resolves with { uid, email, displayName, photoURL }', (done) => {
      const user = { uid: 'uid', email: 'email', displayName: 'displayName', photoURL: 'photoURL' }
      auth.signInWithPopup.and.returnValue(Promise.resolve({ user: { ...user, foo: 'foo' } }))
      signIn(auth, providerSpy).then((result) => {
        expect(result).toEqual(user)
        done()
      })
    })
  })
})
