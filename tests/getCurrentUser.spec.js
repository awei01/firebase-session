import { getCurrentUser } from '@'

const auth = {
  onAuthStateChanged () {}
}

describe('getCurrentUser()', () => {
  beforeEach(() => {
    spyOn(auth, 'onAuthStateChanged')
  })

  it('called with [auth] calls onAuthStateChanged() with function', () => {
    getCurrentUser(auth)
    expect(auth.onAuthStateChanged).toHaveBeenCalledWith(jasmine.any(Function))
  })

  describe('called with [auth] and auth.onAuthStateChanged() callback', () => {
    beforeEach(() => {
      auth.onAuthStateChanged.and.returnValue(() => {})
    })
    it('called calls result of auth.onAuthStateChanged()', (done) => {
      const offSpy = jasmine.createSpy('off')
      auth.onAuthStateChanged.and.returnValue(offSpy)
      getCurrentUser(auth).then((result) => {
        expect(offSpy).toHaveBeenCalled()
        done()
      })
      auth.onAuthStateChanged.calls.mostRecent().args[0]()
    })
    it('called with [] resolve with null', (done) => {
      getCurrentUser(auth).then((result) => {
        expect(result).toBe(null)
        done()
      })
      auth.onAuthStateChanged.calls.mostRecent().args[0]()
    })
    it('called with [null] resolve with null', (done) => {
      getCurrentUser(auth).then((result) => {
        expect(result).toBe(null)
        done()
      })
      auth.onAuthStateChanged.calls.mostRecent().args[0](null)
    })
    it('called with [{ uid, email, displayName, photoURL, ...rest }] resolve with { uid, email, displayName, photoURL }', (done) => {
      const user = { uid: 'uid', email: 'email', displayName: 'displayName', photoURL: 'photoURL' }
      getCurrentUser(auth).then((result) => {
        expect(result).toEqual(user)
        done()
      })
      auth.onAuthStateChanged.calls.mostRecent().args[0]({ ...user, foo: 'foo', bar: 'bar' })
    })
  })
})
