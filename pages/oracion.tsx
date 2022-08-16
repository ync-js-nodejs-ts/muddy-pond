import { FormPrayRequest } from 'components/pages/home/PrayRequest/FormPrayRequest'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>La Casa de mi Padre - Peticion de oración</title>
      </Head>

      <main className='w-full pt-32 pb-10 min-h-screen bg-gradient-to-b from-lcpBlue-300 to-lcpBlue-200'>
        <section className='flex flex-col justify-center items-center sm:mt-0 px-4'>
          <FormPrayRequest />

          <div className='justify-self-start mt-8 pb-10 px-5 text-center'>
            <blockquote className=' text-white text-xs font-light'>
              &quot;Y esta es la confianza que tenemos en <br />
              él, que si pedimos alguna cosa conforme <br />a su voluntad, él nos oye&quot;.
              <span className='text-yellow-400 font-bold'> 1Jn. 5:14</span>
            </blockquote>
          </div>
        </section>
      </main>
    </>
  )
}
