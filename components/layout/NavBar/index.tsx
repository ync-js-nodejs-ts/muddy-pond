import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { IconHamburgerMenu } from 'components/common/Icons/HamburgerMenu'
import { DrawerNavigation } from './DrawerNavigation'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const routesLinkDesktop = [
    { label: 'Inicio', to: '/' },
    { label: 'Reservaciones', to: '/reservaciones' },
    { label: 'Blog', to: '/blog' },
    { label: 'Peticiones de oración', to: '/oracion' },
    { label: 'Contacto', to: '/contactanos' },
  ]

  const calculateLinkColor = () => {
    if (router.pathname === '/' ||router.pathname=== '/reservaciones' || router.pathname === '/oracion' || router.pathname === '/contactanos' ) return 'text-white'
    else return 'text-lcpBlue-200'
  }

  const handleIsOpenDrawer = () => setIsOpen((prevState) => !prevState)

  const calculateToFill = (route: string) => {
    if (route === '/reservaciones' || route === '/contactanos' || route === '/oracion' || route === '/') return 'white'
    else return '#1e478d'
  }

  return (
    <nav>
      <div className='max-w-screen-lg mx-auto flex justify-between px-5'>
        <section className='logo fixed top-0 left-3 z-20'>
          <figure className='bg-lcpBlue-300 px-3 pt-6 pb-2 cursor-pointer' onClick={handleIsOpenDrawer}>
            <Image className='pt-20' src='/img/logo.webp' alt='La Casa de mi Padre - Logo' width={65} height={36} priority />
          </figure>
        </section>

        <div className='fixed top-5 right-5 z-20 flex'>
          <div className={`items-center opacity-0 hidden transition-opacity duration-1000 ${isOpen ? 'lgmin:flex opacity-100' : ''}`}>
            {routesLinkDesktop.map((route) => (
              <Link href={route.to} key={route.to}>
                <a
                  onClick={() => setIsOpen(false)}
                  className={`border mr-2 border-solid border-yellow-500 w-40 py-2 rounded-2xl text-xs font-bold text-center ${calculateLinkColor()}`}
                >
                  {route.label}
                </a>
              </Link>
            ))}
          </div>

          <button onClick={handleIsOpenDrawer}>
            <IconHamburgerMenu height={28} width={28} stroke={calculateToFill(router.pathname)} />
          </button>
        </div>
      </div>

      <DrawerNavigation isOpen={isOpen} handleIsOpenDrawer={handleIsOpenDrawer} />
    </nav>
  )
}
