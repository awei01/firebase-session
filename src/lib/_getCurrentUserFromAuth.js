export default function _getCurrentUserFromAuth (auth) {
  return new Promise((resolve) => {
    const off = auth.onAuthStateChanged(() => {
      resolve(auth.currentUser)
      off()
    })
  })
}
