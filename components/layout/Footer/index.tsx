import Image from 'next/image'
import { IconFacebook, IconInstagram, IconYoutube } from 'components/common/Icons'

export const Footer = () => (
  <footer className='w-full mt-10 h-28'>
    <div className=' bg-gray-900 h-full rounded-3xl rounded-b-none sm:h-auto pb-2 relative'>
      <div className='flex justify-center'>
        <figure className='bg-blue-800 px-3 pt-2 pb-1 rounded -mt-5'>
          <Image
            src='/img/logo.webp'
            alt='La Casa de mi Padre - Logo'
            width={65}
            height={36}
            priority
            className='unSelectElement'
            unselectable='on'
          />
        </figure>
      </div>

      <p className='text-white text-center'>Siguenos en</p>

      <section className='flex justify-center items-center mt-1'>
        <div className='mx-4'>
          <a href='https://www.youtube.com/channel/UCtttlnW0skxAug4MOo7CaeQ' target='_blank' rel='noopener noreferrer'>
            <IconYoutube width={30} height={30} />
          </a>
        </div>

        <div className='mx-4'>
          <a href='https://www.instagram.com/lcpcaracas' target='_blank' rel='noopener noreferrer'>
            <IconInstagram width={26} height={26} />
          </a>
        </div>

        <div className='mx-4'>
          <a href='https://www.facebook.com/lacasademipadrevenezuela' target='_blank' rel='noopener noreferrer'>
            <IconFacebook width={26} height={26} />
          </a>
        </div>
      </section>

      <div className='absolute bottom-2 right-4 text-yellow-400 md:hidden'>
        <small>©lcpcaracas</small>
      </div>
    </div>
  </footer>
)
