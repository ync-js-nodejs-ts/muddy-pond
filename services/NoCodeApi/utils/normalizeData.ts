import { IReservation } from 'types'
export const normalizeReservation = (reservation: IReservation) => {
  let { name, lastname, email, phone, scheduleWorship, totalReservations } = reservation

  if (email === '' || email === ' ') email = 'Sin correo'

  const date = new Date()
  const dateLocal = date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })

  type TNewReservation = [dateLocal: string, fullname: string, phone: string, email: string, totalReservations: number, scheduleWorship: string]

  const newReservation: TNewReservation = [dateLocal, `${name} ${lastname}`, phone, email, Number(totalReservations), scheduleWorship]

  return newReservation
}
