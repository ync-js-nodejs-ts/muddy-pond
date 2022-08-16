import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AuthContext } from 'context/AuthContext'
import { LoginForm } from 'components/pages/login/LoginForm'

export default function Login() {
  const { auth } = useContext(AuthContext)
  const router = useRouter()

  if (auth) router.replace('/')

  return (
    <>
      <Head>
        <title>La Casa de mi Padre - Iniciar Session</title>
      </Head>

      <main className='w-full min-h-screen px-2 flex justify-center items-center -mt-20'>
        <LoginForm />
      </main>
    </>
  )
}
