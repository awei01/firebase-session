export default function extractUser (user) {
  if (!user || typeof user !== 'object') { return null }
  const { uid, email, displayName, photoURL } = user
  return { uid, email, displayName, photoURL }
}
