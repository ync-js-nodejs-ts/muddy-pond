import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from 'components/layout/Button'
import { rules } from './formConfig'
import { AuthContext } from 'context/AuthContext'
import { useContext } from 'react'
import { TUserToRegister } from 'types/user'

export const RegisterForm = () => {
  const { handleSubmit, reset, register } = useForm()
  const { setIsLoading, authRegister } = useContext(AuthContext)

  const onSubmit: SubmitHandler<TUserToRegister> = (userRegister) => {
    setIsLoading(true)

    authRegister(userRegister).then(() => {
      setIsLoading(false)
      reset()
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col max-w-xs mx-auto'>
      <h2 className='text-center'>Crear cuenta</h2>

      <input
        className='focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 px-4 mt-4'
        aria-label='Nombre de Usuario'
        name='username'
        ref={register(rules.username)}
        type='text'
        autoCapitalize='none'
        autoComplete='on'
        autoCorrect='on'
        tabIndex={1}
        placeholder='Nombre de Usuario'
      />

      <input
        className='focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 px-4 mt-4'
        aria-label='Correo'
        name='email'
        ref={register(rules.email)}
        type='email'
        autoCapitalize='none'
        autoComplete='off'
        autoCorrect='off'
        spellCheck='false'
        tabIndex={2}
        placeholder='Correo Electronico'
      />

      <input
        className='focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 px-4 mt-4'
        name='password'
        type='password'
        placeholder='Contraseña'
        ref={register(rules.password)}
        tabIndex={3}
      />

      <div className='mt-4 text-center flex justify-center items-center flex-col'>
        <Button tabIndex={4} type='submit'>
          Enviar
        </Button>

        <div className='mt-2'>
          <p className='text-sm'>¿Ya posees una cuenta?</p>

          <Link href='/login'>
            <a className='text-yellow-400 hover:text-yellow-600'>Inicia Session</a>
          </Link>
        </div>
      </div>
    </form>
  )
}
