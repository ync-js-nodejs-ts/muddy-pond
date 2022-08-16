import Link from 'next/link'
import { useRouter } from 'next/router'
import { IconReservations, IconHome, IconResources, IconContacts } from 'components/common/Icons'

export const NavBarMobile = () => {
  const { route } = useRouter()

  const mapToMatch = (route: string) => {
    if (route === '/recursos') return 'text-yellow-500'
    if (route === '/recursos/predicas') return 'text-yellow-500'
    if (route === '/recursos/podcast') return 'text-yellow-500'
    if (route === '/recursos/estudios-biblicos') return 'text-yellow-500'
  }

  return (
    <nav className='navMobile'>
      <section className='grid pt-1 my-auto grid-cols-4 grid-rows-1 gap-2 content-between w-full px-2'>
        <div className=''>
          <Link href='/'>
            <a className={`hover:text-yellow-500 font-normal text-sm ${route === '/' && 'text-yellow-500'}`}>
              <div className='flex flex-col items-center justify-center'>
                <IconHome />
              </div>
            </a>
          </Link>
        </div>

        <div className=''>
          <Link href='/reservaciones'>
            <a className={`hover:text-yellow-500 font-normal text-sm ${route === '/reservaciones' && 'text-yellow-500'}`}>
              <div className='flex flex-col items-center justify-center'>
                <IconReservations />
                {/* <small>Reservaciones</small> */}
              </div>
            </a>
          </Link>
        </div>

        <div className=''>
          <Link href='/recursos'>
            <a className={`hover:text-yellow-500 font-normal text-sm ${mapToMatch(route)}`}>
              <div className='flex flex-col items-center justify-center'>
                <IconResources />
                {/* <small>Recursos</small> */}
              </div>
            </a>
          </Link>
        </div>

        <div className=''>
          <Link href='/contactanos'>
            <a className={`hover:text-yellow-500 font-normal text-sm ${route === '/contactanos' && 'text-yellow-500'}`}>
              <div className='flex flex-col items-center justify-center'>
                <IconContacts />
                {/* <small>Contactanos</small> */}
              </div>
            </a>
          </Link>
        </div>
      </section>
    </nav>
  )
}
