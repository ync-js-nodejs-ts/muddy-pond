import * as admin from 'firebase-admin'
let serviceAccount = require('./firebase_admin_tests_api_key.json')

!admin.apps.length &&
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  })

export const firebaseAdmin = admin
export const firestoreAdmin = admin.firestore()
