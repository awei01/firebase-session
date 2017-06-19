export default function extractUser (user) {
  if (!user) { return null }
  const { uid, email, displayName, photoURL } = user
  return { uid, email, displayName, photoURL }
}
