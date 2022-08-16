import Head from 'next/head'
import { useEffect, useReducer } from 'react'

import { initialReservationReducer, reservationsReducer } from 'reducers/reservationsReducer'
import { getReservations } from 'services/firebase/utils/reservations'
import { reservationsStatusDB } from 'services/firebase'

import { FormReservation } from 'components/pages/reservaciones/FormReservation'
import { DisabledReservations } from 'components/pages/reservaciones/DisabledReservations'
import { BannerTop } from 'components/common/BannerTop'
import { IconWarning } from 'components/common/Icons'
import { TicketReservation } from 'components/common/TicketReservation'
import { FullReservations } from 'components/pages/reservaciones/FullReservations'

export default function Reservaciones() {
  const [reservations, reservationsDispatch] = useReducer(reservationsReducer, initialReservationReducer)

  useEffect(() => {
    if (!reservations.firstWorship && !reservations.secondWorship)
      reservationsStatusDB.onSnapshot((snap) => {
        reservationsDispatch({ type: 'setIsActive', payload: snap.data().isActive })
        getReservations(reservationsDispatch).catch(console.error)
      })
  }, [])

  if (!reservations.isActive) return <DisabledReservations />

  if (
    reservations.firstWorship > reservations.maxReservations &&
    reservations.secondWorship > reservations.maxReservations &&
    reservations.thirdWorship > reservations.maxReservations
  )
    return <FullReservations />

  return (
    <div>
      <Head>
        <title>La Casa de mi Padre - Reservaciones</title>
        <meta name='description' content='Iglesia cristiana - La Casa de mi Padre - Reservaciones' />
        <meta name='keywords' content='Realiza una reservación en la iglesia La Casa de mi Padre' />
      </Head>

      <main className='w-full py-32 min-h-screen bg-gradient-to-b from-lcpBlue-300 to-lcpBlue-200'>
        <TicketReservation />
        <section className='flex flex-col justify-center items-center sm:mt-0 px-4'>
          <BannerTop type='primary'>
            <IconWarning width={28} height={28} classes='mr-2 mt-1' />
            Se requiere el uso de doble mascarilla
          </BannerTop>
          <FormReservation reservations={reservations} />
        </section>
      </main>
    </div>
  )
}
