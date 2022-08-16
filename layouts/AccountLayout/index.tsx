import Link from 'next/link'
import { ReactNode, useContext } from 'react'
import { AuthContext } from 'context/AuthContext'
import { Profile } from 'components/layout/NavBar/Profile'

function AccountLayout({ children }) {
  const { auth } = useContext(AuthContext)

  if (auth === null) return <div>No Autorizado!</div>

  return (
    <>
      <div className='grid grid-rows-1 min-h-screen w-full' style={{ gridTemplateColumns: '200px 1fr' }}>
        <aside className='bg-gray-800 px-2 py-4' style={{ maxWidth: '200px', borderRadius: '0 20px 20px 0' }}>
          <ul>
            <li>
              <Profile />
            </li>

            <li className='text-white text-sm font-normal hover:text-blue-600 cursor-pointer'>Configuracion</li>

            <li>
              <Link href='/'>
                <a className='text-white text-sm font-normal hover:text-blue-600'>Pagina de inicio</a>
              </Link>
            </li>
          </ul>
        </aside>

        <div>{children}</div>
      </div>
    </>
  )
}

export const getLayout = (page: ReactNode) => <AccountLayout>{page}</AccountLayout>
export default AccountLayout
