import { useContext } from 'react'
import { AuthContext } from 'context/AuthContext'
import { getLayout } from 'layouts/AccountLayout'

function Account() {
  const { auth } = useContext(AuthContext)

  return <main className='w-full min-h-screen px-2 flex justify-center items-center -mt-20'>{auth.email}</main>
}

Account.getLayout = getLayout
export default Account
