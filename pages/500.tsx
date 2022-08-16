import Head from 'next/head'
import Link from 'next/link'

export default function Custom500() {
  return (
    <>
      <Head>
        <title>La Casa de mi Padre - Server Error</title>
        <meta name='googlebot' content='noindex' />
      </Head>

      <div className='h-screen w-full flex justify-center items-center flex-col -mt-10'>
        <div>
          <h3 className='font-black text-3xl'>Hubo un error inesperado</h3>
        </div>

        <br />

        <div>
          <Link href='/'>
            <a className='text-yellow-400'>Ir al inicio</a>
          </Link>
        </div>
      </div>
    </>
  )
}
