import Head from 'next/head'
import Link from 'next/link'

export const DisabledReservations = () => (
  <>
    <Head>
      <title>La Casa de mi Padre - Reservaciones</title>
      <meta name='description' content='Iglesia cristiana - La Casa de mi Padre - Reservaciones' />
      <meta name='keywords' content='Realiza una reservación en la iglesia La Casa de mi Padre' />
    </Head>
    <div className='min-h-screen min-w-screen flex flex-col justify-center items-center'>
      <h3 className='text-2xl font-bold'>
        Reservaciones <br />
        Deshabilitadas
      </h3>

      <Link href='/'>
        <a className='mt-4 text-sm text-lcpYellow-500'>ir a la pagina de inicio</a>
      </Link>
    </div>
  </>
)
