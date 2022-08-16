import Head from 'next/head'
import { ListCategory } from 'components/pages/recursos/index/ListCategory'

export default function Recursos() {
  return (
    <>
      <Head>
        <title>Recursos - La Casa de mi Padre</title>
      </Head>

      <main className='w-full min-h-screen text-center mt-5'>
        <h3 className='text-2xl font-bold'>Recursos</h3>
        <ListCategory />
      </main>
    </>
  )
}
