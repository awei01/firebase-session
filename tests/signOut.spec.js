import { signOut } from '@'

const auth = {
  signOut () {}
}

describe('signOut()', () => {
  beforeEach(() => {
    spyOn(auth, 'signOut').and.returnValue(Promise.resolve())
  })
  it('called with [auth] calls auth.signOut() with []', () => {
    signOut(auth)
    expect(auth.signOut).toHaveBeenCalledWith()
  })
})
