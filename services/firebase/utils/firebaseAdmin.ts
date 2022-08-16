import { config } from 'config'
import admin from 'firebase-admin'

export const verifyIdToken = (token) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      databaseURL: 'https://lcp-caracas-a5bf3.firebaseio.com',
      credential: admin.credential.cert(config.FIREBASE_ADMIN.credentials),
    })
  }

  return admin
    .auth()
    .verifyIdToken(token)
    .catch((error) => {
      throw new Error(`${error}`)
    })
}
