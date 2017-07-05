import partial from 'ramda/src/partial'
import pipeP from 'ramda/src/pipeP'
import prop from 'ramda/src/prop'

import _getCurrentUserFromAuth from './lib/_getCurrentUserFromAuth'
import _signInWithAuthAndProvider from './lib/_signInWithAuthAndProvider'
import _signOutFromAuth from './lib/_signOutFromAuth'
import extractUser from './lib/extractUser'

// exporting lib to facilitate testing
export const lib = {
  _getCurrentUserFromAuth,
  _signInWithAuthAndProvider,
  _signOutFromAuth,
  extractUser
}

export default function FirebaseSession (auth, makeProvider) {
  function getCurrentUser () {
    return pipeP(
      partial(lib._getCurrentUserFromAuth, [auth]),
      lib.extractUser
    )()
  }

  function signIn () {
    return pipeP(
      partial(lib._signInWithAuthAndProvider, [auth, makeProvider]),
      prop('user'),
      lib.extractUser
    )()
  }

  function signOut () {
    return partial(lib._signOutFromAuth, [auth])()
  }

  return {
    getCurrentUser,
    signIn,
    signOut
  }
}
