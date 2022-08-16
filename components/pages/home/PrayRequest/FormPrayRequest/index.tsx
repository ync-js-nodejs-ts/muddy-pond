import { useContext } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { rules } from './formConfig'
import { NotificationContextB, NOTIFICATION_UPDATE } from 'context/NotificationsContextB'

type TDataPrayRequest = { name: string; lastname: string; prayRequest: string }

export const FormPrayRequest = () => {
  const { notificationDispatch } = useContext(NotificationContextB)
  const { register, handleSubmit, errors, reset } = useForm()

  const onSubmit: SubmitHandler<TDataPrayRequest> = (data) => {
    const normalizeData = {
      fullName: `${data.name} ${data.lastname}`,
      prayRequest: data.prayRequest,
    }

    fetch('https://enfwjtv574pfhr9.m.pipedream.net', {
      method: 'POST',
      body: JSON.stringify(normalizeData),
    })
      .then(() => {
        notificationDispatch({
          type: NOTIFICATION_UPDATE,
          payload: {
            isOpen: true,
            type: 'success',
            message: '¡Petición de oración enviada!',
          },
        })
        reset()
      })
      .catch(() => {
        notificationDispatch({
          type: NOTIFICATION_UPDATE,
          payload: {
            isOpen: true,
            type: 'success',
            message: '¡Reservación Exitosa!',
          },
        })
        reset()
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-md w-full text-center flex justify-center items-center flex-col'>
      <h3 className='text-3xl font-semibold text-lcpYellow-500 text-center'>Petición de oración</h3>

      <div className='w-full mt-10'>
        <input
          className='focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-full text-sm text-white placeholder-white rounded-2xl py-2 px-4 mt-2 bg-opacity-20 bg-white border-none font-extralight'
          aria-label='Nombre'
          name='name'
          ref={register}
          type='text'
          autoCapitalize='none'
          autoComplete='off'
          autoCorrect='on'
          tabIndex={1}
          placeholder='Nombre'
          aria-autocomplete='list'
        />

        <input
          className='focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-full text-sm text-white placeholder-white rounded-2xl py-2 px-4 mt-2 bg-opacity-20 bg-white border-none font-extralight'
          aria-label='Apellido'
          name='lastname'
          ref={register}
          type='text'
          autoCapitalize='none'
          autoComplete='off'
          autoCorrect='on'
          tabIndex={2}
          placeholder='Apellido'
          aria-autocomplete='list'
        />

        <textarea
          className='focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-full text-sm text-white placeholder-white rounded-2xl py-2 px-4 mt-2 bg-opacity-20 bg-white border-none font-extralight'
          aria-label='Mensaje'
          name='prayRequest'
          autoCapitalize='none'
          autoComplete='off'
          autoCorrect='off'
          spellCheck='false'
          tabIndex={3}
          placeholder='Por favor indicanos cual es tu petición'
          aria-autocomplete='list'
          rows={10}
          ref={register(rules.prayRequest)}
        />
        {errors.prayRequest && <p className='text-sm text-red-400'>{errors.prayRequest.message}</p>}
      </div>

      <div className='mt-2'>
        <button tabIndex={4} type='submit' className='bg-yellow-400 mt-4 w-48 py-1 rounded-2xl text-sm font-medium text-center text-white'>
          Enviar petición
        </button>
      </div>
    </form>
  )
}
