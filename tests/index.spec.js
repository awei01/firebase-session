import FirebaseSession, { lib } from '@'

describe('FirebaseSession()', () => {
  it(`getCurrentUser()
      calls _getCurrentUserFromAuth() with [auth] and resolves with user
      calls extractUser() with [user] and resolves with its result`,
    (done) => {
      const { getCurrentUser } = FirebaseSession('auth')
      spyOn(lib, '_getCurrentUserFromAuth').and.returnValue(Promise.resolve('currentUser'))
      spyOn(lib, 'extractUser').and.returnValue('extractedUser')

      getCurrentUser().then((result) => {
        expect(lib._getCurrentUserFromAuth).toHaveBeenCalledWith('auth')
        expect(lib.extractUser).toHaveBeenCalledWith('currentUser')
        expect(result).toBe('extractedUser')
        done()
      })
    })
  it(`signIn()
      calls _signInWithAuthAndProvider() with [auth, makeProvider] and resolves with { user }
      calls extractUser() with [user] and resolves with its result`,
    (done) => {
      const { signIn } = FirebaseSession('auth', 'makeProvider')
      spyOn(lib, '_signInWithAuthAndProvider').and.returnValue(Promise.resolve({ user: 'user' }))
      spyOn(lib, 'extractUser').and.returnValue('extractedUser')

      signIn().then((result) => {
        expect(lib._signInWithAuthAndProvider).toHaveBeenCalledWith('auth', 'makeProvider')
        expect(lib.extractUser).toHaveBeenCalledWith('user')
        expect(result).toBe('extractedUser')
        done()
      })
    })

  it(`signOut()
      calls _signOutFromAuth with [auth] and resolves with result`,
    (done) => {
      const { signOut } = FirebaseSession('auth')
      spyOn(lib, '_signOutFromAuth').and.returnValue(Promise.resolve('result'))

      signOut().then((result) => {
        expect(lib._signOutFromAuth).toHaveBeenCalledWith('auth')
        expect(result).toBe('result')
        done()
      })
    })
})
