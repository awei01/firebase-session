import partial from 'ramda/src/partial'
import pipeP from 'ramda/src/pipeP'
import prop from 'ramda/src/prop'

import extractUser from './extractUser'
import getCurrentUserFromAuth from './getCurrentUserFromAuth'
import signInWithAuth from './signInWithAuth'
import signOutWithAuth from './signOutWithAuth'

export function getCurrentUser (auth) {
  return pipeP(
    partial(getCurrentUserFromAuth, [auth]),
    extractUser
  )()
}

export function signIn (auth, makeProvider) {
  return pipeP(
    partial(signInWithAuth, [auth, makeProvider]),
    prop('user'),
    extractUser
  )()
}

export function signOut (auth) {
  return pipeP(
    partial(signOutWithAuth, [auth])
  )()
}

