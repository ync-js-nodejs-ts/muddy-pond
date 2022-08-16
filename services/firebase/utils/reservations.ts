import { Dispatch } from 'react'
import { TActionReservationsReducer } from 'reducers/reservationsReducer'
import { firebaseApp as firebase, firstWorshipDB, reservationsDB, secondWorshipDB, thirdWorshipDB } from 'services/firebase'

export const TotalReservationsUpdateIncrement = (sheduleWorship, total) => {
  console.log('Total Reservations Update Increment', sheduleWorship, total)

  const FieldValue = firebase.firestore.FieldValue

  if (sheduleWorship === '1er Servicio (8:30 a.m)') {
    firstWorshipDB
      .update({
        total: FieldValue.increment(total),
      })
      .then(() => console.log('Reservaciones total sumando:', total, 'reservaciones'))
  } else if (sheduleWorship === '2do Servicio (10:15 a.m)') {
    secondWorshipDB
      .update({
        total: FieldValue.increment(total),
      })
      .then(() => console.log('Reservaciones total sumando:', total, 'reservaciones'))
  } else if (sheduleWorship === '3er Servicio (12:00 p.m)') {
    thirdWorshipDB
      .update({
        total: FieldValue.increment(total),
      })
      .then(() => console.log('Reservaciones total sumando:', total, 'reservaciones'))
  }
}

export const getReservations = async (dispatch: Dispatch<TActionReservationsReducer>) => {
  try {
    reservationsDB.onSnapshot(({ docs }) => {
      dispatch({ type: 'setLoading', payload: true })

      docs.forEach((doc) => {
        if (doc.id === 'firstWorship') dispatch({ type: 'setFirstWorship', payload: doc.data().total })
        else if (doc.id === 'secondWorship') dispatch({ type: 'setSecondWorship', payload: doc.data().total })
        else if (doc.id === 'thirdWorship') dispatch({ type: 'setThirdWorship', payload: doc.data().total })
      })
    })
  } catch (error) {
    throw new Error(`getReservations algo salio mal ${error}`)
  }
}
