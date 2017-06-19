export default function signInWithAuth (auth, makeProvider) {
  const provider = makeProvider()
  return auth.signInWithPopup(provider)
}
