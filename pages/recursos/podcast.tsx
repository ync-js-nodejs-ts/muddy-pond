import Head from 'next/head'
import { Player } from 'components/pages/recursos/Podcast/Player'

export default function Podcast() {
  return (
    <>
      <Head>
        <title>La Casa de mi Padre - Podcast</title>
      </Head>

      <main className='w-full min-h-screen text-center px-4'>
        <h3 className='text-xl font-bold'>Podcast</h3>

        <section className='max-w-5xl mt-4 mx-auto'>
          <Player />
        </section>
      </main>
    </>
  )
}
