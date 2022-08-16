import { useForm, SubmitHandler } from 'react-hook-form'
import { rules } from './formConfig'

type TDataOnSubmit = { name: string; lastname: string; message: string }

export const WhatsappContact = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit: SubmitHandler<TDataOnSubmit> = (data) => {
    console.log(data)

    const BaseUrl = 'https://api.whatsapp.com/send?phone=584241498800'
    const __ = '%0A' // Saltos de Linea

    window.open(
      `
        ${BaseUrl}&text=Hola mi nombre es ${data.name} ${data.lastname}
        ${__}
        ${__}${data.message}`,
      '_blank',
      'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=500,height=600'
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full'>
      <input
        className='focus:border-yellow-500 font-extralight border-none focus:ring-1 focus:ring-yellow-500 focus:outline-none w-full text-sm text-white placeholder-white rounded-2xl py-2 px-4 mt-6 bg-opacity-20 bg-white'
        aria-label='Nombre'
        name='name'
        ref={register(rules.name)}
        type='text'
        autoCapitalize='none'
        autoComplete='off'
        autoCorrect='on'
        tabIndex={1}
        placeholder='Nombre'
        aria-autocomplete='list'
      />
      {errors.name && <p className='text-sm text-red-400'>{errors.name.message}</p>}

      <input
        className='focus:border-yellow-500 font-extralight border-none focus:ring-1 focus:ring-yellow-500 focus:outline-none w-full text-sm text-white placeholder-white rounded-2xl py-2 px-4 mt-2 bg-opacity-20 bg-white'
        aria-label='Apellido'
        name='lastname'
        ref={register(rules.lastname)}
        type='text'
        autoCapitalize='none'
        autoComplete='off'
        autoCorrect='on'
        tabIndex={2}
        placeholder='Apellido'
        aria-autocomplete='list'
      />
      {errors.lastname && <p className='text-sm text-red-400'>{errors.lastname.message}</p>}

      <textarea
        className='focus:border-yellow-500 font-extralight border-none focus:ring-1 focus:ring-yellow-500 focus:outline-none w-full text-sm text-white placeholder-white rounded-2xl py-2 px-4 mt-2 bg-opacity-20 bg-white'
        aria-label='Mensaje'
        name='message'
        autoCapitalize='none'
        autoComplete='off'
        autoCorrect='off'
        spellCheck='false'
        tabIndex={4}
        placeholder='Mensaje'
        aria-autocomplete='list'
        ref={register(rules.message)}
        rows={10}
      />
      {errors.message && <p className='text-sm text-red-400'>{errors.message.message}</p>}

      <section className='mt-2'>
        <button tabIndex={5} type='submit' className='bg-yellow-400 mt-4 w-48 py-1 rounded-2xl text-sm font-medium text-center text-white'>
          Enviar
        </button>
      </section>
    </form>
  )
}
