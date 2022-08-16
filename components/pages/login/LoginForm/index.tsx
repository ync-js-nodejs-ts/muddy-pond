import Link from 'next/link'
import { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useProvideAuth } from 'hooks/useProvideAuth'
import { AuthContext } from 'context/AuthContext'
import { Button } from 'components/layout/Button'
import { IconGoogle } from 'components/common/Icons'
import { rules } from './formConfig'
import { TUserToLogin } from 'types/user'

export const LoginForm = () => {
  const { signInWithGoogle } = useProvideAuth()
  const { handleSubmit, reset, register } = useForm()
  const { authLogin, setIsLoading } = useContext(AuthContext)

  const onSubmit: SubmitHandler<TUserToLogin> = (userLogin) => {
    setIsLoading(true)

    authLogin(userLogin).then(() => {
      setIsLoading(false)
      reset()
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col max-w-xs mx-auto'>
      <h2 className='text-center'>Iniciar Session</h2>

      <input
        className='focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 px-4 mt-4'
        aria-label='Usuario o Correo Electrónico'
        name='identifier'
        ref={register(rules.identifier)}
        type='text'
        autoCapitalize='none'
        autoComplete='off'
        autoCorrect='off'
        spellCheck='false'
        tabIndex={1}
        placeholder='Usuario o Correo Electrónico'
      />

      <input
        className='focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 px-4 mt-4'
        name='password'
        type='password'
        placeholder='Contraseña'
        ref={register(rules.password)}
        tabIndex={2}
      />

      <div className='mt-4 text-center flex justify-center items-center flex-col'>
        <Button tabIndex={3} type='submit'>
          Enviar
        </Button>

        <div className='mt-2'>
          <p className='text-sm'>¿No estas registrado?</p>

          <Link href='/register'>
            <a className='text-yellow-400 hover:text-yellow-600'>Crea Cuenta</a>
          </Link>
        </div>

        <div className='shadow-neon mt-6 cursor-pointer max-w-xs px-4 py-2 rounded flex justify-center items-center' onClick={signInWithGoogle}>
          <IconGoogle />
          <p className='ml-2 text-sm'>Iniciar Session con Google</p>
        </div>
      </div>
    </form>
  )
}
