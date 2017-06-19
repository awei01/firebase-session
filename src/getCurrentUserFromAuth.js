export default function getCurrentUserFromAuth (auth) {
  return new Promise((resolve) => {
    const off = auth.onAuthStateChanged((user) => {
      resolve(user)
      off()
    })
  })
}
