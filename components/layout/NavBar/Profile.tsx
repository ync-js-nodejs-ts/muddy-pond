import Link from 'next/link'
import { Fragment, useContext } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { AuthContext } from 'context/AuthContext'
// import { IconAccount } from "components/common/Icons"

export const Profile = () => {
  const auth = useContext(AuthContext)

  const validateRole = () => {
    if (auth.auth.role.type === 'admin') return true
    if (auth.auth.role.type === 'collaborator') return true
    if (auth.auth.role.type === 'authenticated') return true
    else return false
  }

  const routes = [{ label: 'Mi Cuenta', route: '/account' }]

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Menu as='div' className='ml-3 relative z'>
      {({ open }) => (
        <div>
          <div>
            <Menu.Button className='max-w-xs bg-gray-200 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
              <span className='sr-only'>Open user menu</span>
              {/* {
                auth?.user?.avatar
                  ? <img className="h-8 w-8 rounded-full" src={auth?.user?.avatar} alt={auth?.user?.email.content} />
                  : <IconAccount width={26} height={26} />
              } */}
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items
              static
              className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
            >
              {auth && (
                <Menu.Item as='div'>
                  <div onClick={() => auth.logout()} className='block px-4 py-2 text-sm text-gray-700 select-none'>
                    {auth.auth.email}
                  </div>
                  <hr />
                </Menu.Item>
              )}

              <Menu.Item>
                {validateRole() && (
                  <Link href='/admin'>
                    <a className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' role='menuitem'>
                      Panel de Administración
                    </a>
                  </Link>
                )}
              </Menu.Item>

              {routes.map(({ route, label }) => (
                <Menu.Item key={route}>
                  {({ active }) => (
                    <Link href={`${route}`}>
                      <a className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100')}>{label}</a>
                    </Link>
                  )}
                </Menu.Item>
              ))}

              <Menu.Item>
                <p onClick={() => auth.logout()} className='cursor-pointer select-none block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                  Cerrar Session
                </p>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  )
}
