import { TotalReservationsUpdateIncrement } from 'services/firebase/utils/reservations'
import { IReservation } from 'types'

export const submitReservation = async (reservation: IReservation) => {
  if (reservation.email === '' || reservation.email === ' ') reservation.email = 'Sin correo'

  const date = new Date()
  const dateLocal = date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
  reservation.reservationDate = dateLocal

  try {
    const res = await fetch(`https://enzlo4djpfd3xq0.m.pipedream.net`, {
      mode: 'cors',
      method: 'post',
      body: JSON.stringify(reservation),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })

    console.log(res)
    TotalReservationsUpdateIncrement(reservation.scheduleWorship, reservation.totalReservations)

    if (res.status >= 300) return `${res.status} No se pudo realizar la reservación!`
    else if (res.status <= 299) return `${res.status} Reservación Exitosa!`
    else return 'Algo Paso!'
  } catch (err) {
    console.error('Catch Error', err)
    throw new Error('Algo paso!')
  }
}
