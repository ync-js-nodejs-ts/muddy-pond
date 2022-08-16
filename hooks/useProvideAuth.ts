import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { firebaseApp, auth } from 'services/firebase'
import { normalizeUser } from 'services/firebase/utils/normalizeUser'

// Provider hook that creates auth object and handles state
export function useProvideAuth() {
  const [user, setUser] = useState(null)
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email: string, password: string) => {
    return firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        const userAuth = normalizeUser(user)
        setUser(userAuth)
        return userAuth
      })
      .catch((err) => console.error('useProvideAuth signin', err))
  }

  const signInWithGoogle = () => {
    const provider = new firebaseApp.auth.GoogleAuthProvider()

    firebaseApp
      .auth()
      .signInWithPopup(provider)
      .then(({ user }) => {
        normalizeUser(user).then((userAuth) => {
          setUser(userAuth)
          return userAuth
        })
      })
      .catch((err) => console.error('useProvideAuth signInWithGoogle', err))
  }

  const signup = (email: string, password: string) => {
    return firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        normalizeUser(user).then((userAuth) => {
          setUser(userAuth)
          return userAuth
        })
      })
      .catch((err) => console.error('useProvideAuth signup', err))
  }

  const signout = () => {
    return firebaseApp
      .auth()
      .signOut()
      .then(() => {
        setUser(null)
      })
      .catch((err) => console.error('useProvideAuth signout', err))
  }

  const sendPasswordResetEmail = (email: string) => {
    return firebaseApp
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true
      })
      .catch((err) => console.error('useProvideAuth sendPasswordResetEmail', err))
  }

  const confirmPasswordReset = (code, password) => {
    return firebaseApp
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true
      })
      .catch((err) => console.error('useProvideAuth confirmPasswordReset', err))
  }
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = firebaseApp.auth().onAuthStateChanged((user) => {
      // console.log('currentUser:', user)

      if (user) {
        normalizeUser(user).then(setUser)
      } else {
        setUser(null)
      }
    })
    // Cleanup subscription on unmount
    return () => unsubscribe()
  }, [])
  // Return the user object and auth methods
  return {
    user,
    signin,
    signInWithGoogle,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  }
}
