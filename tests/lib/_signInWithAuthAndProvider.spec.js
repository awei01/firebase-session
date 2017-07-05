import _signInWithAuthAndProvider from '@/lib/_signInWithAuthAndProvider'

const auth = {
  signInWithPopup () {}
}

describe('_signInWithAuthAndProvider()', () => {
  const providerSpy = jasmine.createSpy('provider')
  beforeEach(() => {
    providerSpy.calls.reset()
    spyOn(auth, 'signInWithPopup')
  })
  it('called with [auth, makeProvider] calls makeProvider() with []', () => {
    _signInWithAuthAndProvider(auth, providerSpy)
    expect(providerSpy).toHaveBeenCalled()
  })
  it('called with [auth, makeProvider] when makeProvider() returns provider calls auth.signInWithPopup() with provider', () => {
    providerSpy.and.returnValue('provider instance')
    _signInWithAuthAndProvider(auth, providerSpy)
    expect(auth.signInWithPopup).toHaveBeenCalledWith('provider instance')
  })
  it('called with [auth, makeProvider] when makeProvider() returns result of auth.signInWithPopup()', () => {
    auth.signInWithPopup.and.returnValue('result')
    expect(_signInWithAuthAndProvider(auth, providerSpy)).toBe('result')
  })
})
