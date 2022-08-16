import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import { Contact } from 'components/common/Contact'
import { Spinner } from 'components/common/Loader'

export default function Contactanos() {
  const Map = useMemo(
    () =>
      dynamic(() => import('components/common/Contact/Map'), {
        loading: () => <Spinner message='Cargando Mapa...' />,
        ssr: false,
      }),
    []
  )

  return (
    <>
      <Head>
        <title>La Casa de mi Padre - Contáctanos</title>
      </Head>

      <main className='w-full pt-20 pb-10 min-h-screen bg-gradient-to-b from-lcpBlue-300 to-lcpBlue-200'>
        <div className='max-w-md tabletmin:max-w-6xl w-full mx-auto flex flex-row px-4  overflow-x-hidden'>
          <Contact />
          <Map />
        </div>
      </main>
    </>
  )
}
