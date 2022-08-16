import { XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'

export const DrawerNavigation = ({ isOpen, handleIsOpenDrawer }: { isOpen: boolean; handleIsOpenDrawer: () => void }) => {
  const routesLink = [
    { label: 'Inicio', to: '/' },
    { label: 'Reservaciones', to: '/reservaciones' },
    { label: 'Blog', to: '/blog' },
    { label: 'Peticiones de oración', to: '/oracion' },
    { label: 'Contacto', to: '/contactanos' },
  ]

  return (
    <div
      className={`lgmin:hidden z-20 fixed bg-lcpBlue-350 opacity-80 w-full h-screen flex justify-center top-0 transition-all transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <aside className='w-full h-full relative'>
        <button
          className='absolute top-5 right-5 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
          onClick={handleIsOpenDrawer}
        >
          <span className='sr-only'>Close panel</span>
          <XIcon className='h-6 w-6' aria-hidden='true' />
        </button>

        <div className='w-full h-full flex justify-start items-center flex-col'>
          <section className='mt-10'>
            <picture>
              <Image className='pt-20' src='/img/logo.webp' alt='La Casa de mi Padre - Logo' width={65} height={36} priority />
            </picture>
          </section>

          <section className='my-5 overflow-y-scroll'>
            <div className='h-full flex flex-col justify-start items-center'>
              {routesLink.map((route) => (
                <Link href={route.to} key={route.to}>
                  <a
                    onClick={handleIsOpenDrawer}
                    className='border mt-4 border-solid border-yellow-500 w-40 py-2 rounded-2xl text-xs font-normal text-center text-white'
                  >
                    {route.label}
                  </a>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </aside>
    </div>
  )
}
