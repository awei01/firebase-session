import _getCurrentUserFromAuth from '@/lib/_getCurrentUserFromAuth'

const auth = {
  onAuthStateChanged () {}
}

describe('_getCurrentUserFromAuth()', () => {
  beforeEach(() => {
    spyOn(auth, 'onAuthStateChanged')
  })

  it('called with [auth] calls onAuthStateChanged() with function', () => {
    _getCurrentUserFromAuth(auth)
    expect(auth.onAuthStateChanged).toHaveBeenCalledWith(jasmine.any(Function))
  })

  describe('called with [auth] and auth.onAuthStateChanged() callback', () => {
    beforeEach(() => {
      auth.onAuthStateChanged.and.returnValue(() => {})
    })
    it('called calls result of auth.onAuthStateChanged()', (done) => {
      const offSpy = jasmine.createSpy('off')
      auth.onAuthStateChanged.and.returnValue(offSpy)
      _getCurrentUserFromAuth(auth).then((result) => {
        expect(offSpy).toHaveBeenCalled()
        done()
      })
      auth.onAuthStateChanged.calls.mostRecent().args[0]()
    })
    it('called with [] resolve with auth.currentUser', (done) => {
      auth.currentUser = 'result'
      _getCurrentUserFromAuth(auth).then((result) => {
        expect(result).toBe('result')
        done()
      })
      auth.onAuthStateChanged.calls.mostRecent().args[0]()
    })
  })
})
