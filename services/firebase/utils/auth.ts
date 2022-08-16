import { auth, firebaseApp as firebase } from 'services/firebase'

export const SignIn = async (email, password) => {
  return await auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log('SignIn', user)
      return user
    })
    .catch(console.error)
}

export const SignOut = async () => {
  await auth
    .signOut()
    .then(() => console.log('SignOut'))
    .catch(console.error)
}

export const loginWithGoogle = () => {
  const GoogleProvider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(GoogleProvider)
}

export const CreateUser = async (email, password) => {
  return await auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => user)
    .catch(console.error)
}
