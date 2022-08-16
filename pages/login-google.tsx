import Head from 'next/head'
import Link from 'next/link'
import { Button } from 'components/layout/Button'
import { getSession, signIn, signOut } from 'next-auth/client'

type TSession = {
  user: {
    name: string
    email: string
    image: string
  }
  expires: string
  jwt: string
  id: string
}

const NewLogin = ({ session }: { session: TSession }) => {
  const signInButtonNode = () => {
    if (session) return false

    return (
      <div>
        <Link href='/api/auth/signin'>
          <button
            onClick={(e) => {
              e.preventDefault()
              signIn()
            }}
          >
            Sign In
          </button>
        </Link>
      </div>
    )
  }

  const signOutButtonNode = () => {
    if (!session) return false

    return (
      <div>
        <Link href='/api/auth/signout'>
          <Button callback={() => signOut()}>Sign Out</Button>
        </Link>
      </div>
    )
  }

  if (!session) {
    return (
      <div className='hero'>
        <div className='navbar'>
          {signOutButtonNode()}
          {signInButtonNode()}
        </div>
        <div className='text'>No estas autorizado para ver esta pagina</div>
      </div>
    )
  }

  return (
    <div className='hero w-full min-h-screen px-4'>
      <Head>
        <title>Index Page</title>
      </Head>
      <div className='navbar'>
        {signOutButtonNode()}
        {signInButtonNode()}
      </div>
      <div className='text w-full '>
        Hola usuario
        <p>User Id: {session.id}</p>
        <p>User Name: {session.user.name}</p>
        <p>User Email: {session.user.email}</p>
        <p>
          User Image: <img src={session.user.image} alt={session.user.name} width='120px' height='120px' />
        </p>
        <p>User Session Expires in: {session.expires}</p>
        <div className='max-w-xs px-2 text-center'>
          <p>Token: {session.jwt}</p>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  return {
    props: {
      session,
    },
  }
}

export default NewLogin
