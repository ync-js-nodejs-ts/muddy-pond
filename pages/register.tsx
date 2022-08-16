import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { RegisterForm } from 'components/pages/register/RegisterForm'
import { AuthContext } from 'context/AuthContext'

export default function Register() {
  const { auth } = useContext(AuthContext)
  const router = useRouter()

  if (auth) router.replace('/')

  return (
    <>
      <Head>
        <title>La Casa de mi Padre - Crear Cuenta</title>
      </Head>

      <main className='w-full min-h-screen px-2 flex justify-center items-center -mt-20'>
        <RegisterForm />
      </main>
    </>
  )
}
