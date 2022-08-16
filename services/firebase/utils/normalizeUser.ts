import firebase from 'firebase'

export const normalizeUser = async (user: firebase.User) => {
  try {
    const verifyEmailToRole = (email: string) => {
      if (email === 'admin@gmail.com') return 'admin'
      if (email === 'script.kev@gmail.com') return 'admin'
      if (email === 'collaborator@gmail.com') return 'collaborator'
      if (email === 'kblanco349@gmail.com') return 'basic'
      else return 'basic'
    }

    const decodedToken = await user.getIdTokenResult(/*forceRefresh*/ true)
    const { token, expirationTime } = decodedToken
    console.log('normalizeUser token', token)

    const userAuth = {
      id: user.uid,
      username: user.displayName,
      email: {
        content: user.email,
        isVerify: user.emailVerified,
      },
      createdAt: user.metadata.creationTime,
      phone: user.phoneNumber,
      avatar: user.photoURL,
      refreshToken: user.refreshToken,
      role: verifyEmailToRole(user.email),
      token,
      tokenExpiration: expirationTime,
    }

    console.log('firebase/utils normalizeUser userAuth:', userAuth)
    return userAuth
  } catch (err) {
    console.error('firebase/utils normalizeUser userAuth:', err)
  }
}
