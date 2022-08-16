import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/auth'
import 'firebase/firestore'
import { config } from 'config'

!firebase.apps.length && firebase.initializeApp(config.FIREBASE)

export const firebaseApp = firebase
export const storage = firebase.storage()
export const db = firebase.firestore()
export const auth = firebase.auth()

export const reservationsDB = db.collection('reservations')
export const reservationsStatusDB = reservationsDB.doc('status')

export const firstWorshipDB = reservationsDB.doc('firstWorship')
export const secondWorshipDB = reservationsDB.doc('secondWorship')
export const thirdWorshipDB = reservationsDB.doc('thirdWorship')

// Referencias
export const THEME_IMAGES = {
  HEADER_HOME: storage.ref().child('theme_church/HeaderHome.webp'),
  FORM_RESERVATION: storage.ref().child('theme_church/FormReservation.webp'),
  PODCAST_TEST: storage.ref().child('podcasts/lcpcaracas-sigamos-adelante.mp3'),
}
