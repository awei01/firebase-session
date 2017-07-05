export default function _signInWithAuthAndProvider (auth, makeProvider) {
  const provider = makeProvider()
  return auth.signInWithPopup(provider)
}
