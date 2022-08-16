// import { Button } from 'components/layout/Button'
import Image from 'next/image'
// import { Welcome } from './Welcome'

// import { CustomImage } from 'components/common/CustomImage'

export const HeaderHome = () => {
  return (
    // <header className='px-2 bg-headerBg bg-cover bg-no-repeat bg-left pt-40' style={{ backgroundPositionX: '25%' }}>
    <header className='h-screen w-full relative overflow-hidden'>
      <Image alt='Mountains' src='/img/bgHeader.png' layout='fill' objectFit='cover' quality={100} />
      {/* Tailwind no posee una propiedad de 'max-content' o 'min-content' para el height */}
      <div className='absolute left-0 right-0 top-0 bottom-0 m-auto w-3/4 max-w-md' style={{ height: 'max-content' }}>
        <Image alt='Mountains' src='/img/bgHeaderLayer.png' layout='intrinsic' objectFit='contain' quality={100} width={700} height={475} />
      </div>
      {/* <CustomImage alt='Mountains' src='/img/HeaderBg-09-05-21.webp' layout='fill' objectFit='cover' quality={100} /> */}
      {/* <Welcome />

      <div className='w-full mt-20 mx-auto rounded-md flex justify-center items-center text-center px-4 flex-col'>
        <div>
          <p className='text-4xl font-semibold text-white sm:text-3xl'>
            <span className='text-yellow-400'>#</span>
            Quedate
            <span className='text-yellow-400'>En</span>
            Casa
          </p>
        </div>

        <div className='mt-4'>
          <p className='text-sm text-white font-semibold'>
            Queremos
            <span className='text-yellow-400'> Cuidarte</span>
          </p>
        </div>

        <div className='mt-2 px-6'>
          <p className='text-xs text-white font-light'>
            Nos preocupamos profundamente por la seguridad de nuestra comunidad, huéspedes y voluntarios. <br /> <br />
            Todas las áreas de servicio se desinfectan continuamente y se recomienda encarecidamente el uso de máscaras. <br /> <br />
            También tenemos opciones de asientos de distancia social disponibles en el santuario principal.
          </p>
        </div>

        <div className='mt-4 mb-10'>
          <Link href='/reservaciones'>
            <a className='border border-solid border-yellow-300 px-10 py-1 rounded-xl text-xs font-medium text-white'>Reservaciones</a>
          </Link>
        </div>
      </div> */}
    </header>
  )
}
