import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>La Casa de mi Padre - 404</title>
        <meta name='googlebot' content='noindex' />
      </Head>

      <div className='h-screen w-full flex justify-center items-center flex-col -mt-10'>
        <div>
          <h3 className='font-black text-3xl'>Pagina no existente</h3>
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
