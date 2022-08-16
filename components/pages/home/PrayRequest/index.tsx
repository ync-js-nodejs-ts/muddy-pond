import Link from 'next/link'

export const PrayRequest = () => (
  <section className='bg-biblia bg-no-repeat bg-cover bg-center bg- w-full h-96 mx-auto pt-6 pb-14 px-4 flex justify-between items-center text-center flex-col'>
    <div>
      <h3 className='mt-10 text-xl tabletmin:text-2xl font-light text-white'>
        Queremos <br />
        <span className='text-yellow-400 text-3xl font-semibold'> Orar por ti</span>
      </h3>{' '}
      <br />
    </div>

    <div className='-mt-28 tabletmin:mt-4'>
      <Link href='/oracion'>
        <a>
          <div className='text-white font-semibold text-xs tabletmin:text-sm rounded-2xl h-full px-3 py-1 bg-yellow-400 border-yellow-400 hover:border-yellow-500'>
            Haz click aqui <br />
            queremos orar por ti
          </div>
        </a>
      </Link>
    </div>

    <div className='justify-self-start'>
      <blockquote className=' text-white text-xs font-light'>
        &quot;Y esta es la confianza que tenemos en <br className='tabletmin:hidden block' />
        él, que si pedimos alguna cosa conforme <br />a su voluntad, él nos oye&quot;. <span className='text-yellow-400 font-bold'>1Jn. 5:14</span>
      </blockquote>
    </div>
  </section>
)
