import _signOutFromAuth from '@/lib/_signOutFromAuth'

const auth = {
  signOut () {}
}

describe('_signOutFromAuth()', () => {
  beforeEach(() => {
    spyOn(auth, 'signOut')
  })
  it('called with [auth] calls auth.signOut() with []', () => {
    _signOutFromAuth(auth)
    expect(auth.signOut).toHaveBeenCalledWith()
  })
  it('called with [auth] returns result of auth.signOut()', () => {
    auth.signOut.and.returnValue('result')
    expect(_signOutFromAuth(auth)).toBe('result')
  })
})
