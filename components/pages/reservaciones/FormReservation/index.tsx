import { useContext, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IReservation, IFormReservationProps } from 'types'
import { TicketContext } from 'context/ModalContext'
import { NotificationContextB, NOTIFICATION_UPDATE } from 'context/NotificationsContextB'
import { submitReservation } from 'services/NoCodeApi'
import { Spinner } from 'components/common/Loader'
import { rules } from './formConfig'
import { SelectWorship } from './SelectWorship'
import { SelectChairs } from './SelectChairs'

export const FormReservation = ({ reservations }: IFormReservationProps) => {
  const { notificationDispatch } = useContext(NotificationContextB)
  const { ticketDispatch } = useContext(TicketContext)
  const [selectorsUncontrolled, setSelectorsUncontrolled] = useState({ chairs: 1, schedule: '1er Servicio (8:30 a.m)' })
  const { register, handleSubmit, errors, reset } = useForm<IReservation>()

  const handleSelectors = (e) => {
    if (e.chairs)
      setSelectorsUncontrolled((prevState) => {
        return {
          ...prevState,
          chairs: e.chairs,
        }
      })

    if (e.schedule)
      setSelectorsUncontrolled((prevState) => {
        return {
          ...prevState,
          schedule: e.schedule,
        }
      })
  }

  const onSubmit: SubmitHandler<IReservation> = (valueInputs) => {
    ticketDispatch({ type: 'ticketLoading', payload: true })
    const data = { ...valueInputs, totalReservations: selectorsUncontrolled.chairs, scheduleWorship: selectorsUncontrolled.schedule }

    submitReservation(data)
      .then(() => {
        ticketDispatch({ type: 'ticketLoading', payload: true })
        ticketDispatch({
          type: 'ticketData',
          payload: {
            email: data.email,
            lastname: data.lastname,
            name: data.name,
            phone: data.phone,
            chairs: data.totalReservations,
            schedule: data.scheduleWorship,
          },
        })
        ticketDispatch({ type: 'ticketLoading', payload: false })
        ticketDispatch({ type: 'ticketOpen' })
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

      .catch(() => {
        notificationDispatch({
          type: NOTIFICATION_UPDATE,
          payload: {
            isOpen: true,
            type: 'error',
            message: 'Lo siento, ha ocurrido un error durante la reservación...',
          },
        })
      })
  }

  return (
    <div className='w-full items-center flex justify-center text-center sm:justify-center mt-4 tabletmin:mt-5'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col max-w-md w-full'>
        <h3 className='text-3xl font-semibold text-lcpYellow-500'>Reservaciones</h3>
        <input
          className='focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-full text-sm text-white placeholder-white rounded-2xl py-2 px-4 mt-4 bg-opacity-20 bg-white border-none font-extralight'
          aria-label='Nombre'
          name='name'
          ref={register(rules.name)}
          type='text'
          autoCapitalize='word'
          autoComplete='on'
          tabIndex={1}
          placeholder='Nombre'
        />
        {errors.name && <p className='text-sm text-red-400'>{errors.name.message}</p>}

        <input
          className='focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-full text-sm text-white placeholder-white rounded-2xl py-2 px-4 mt-2 bg-opacity-20 bg-white border-none font-extralight'
          aria-label='Apellido'
          name='lastname'
          ref={register(rules.lastname)}
          type='text'
          autoCapitalize='word'
          autoComplete='on'
          tabIndex={2}
          placeholder='Apellido'
        />
        {errors.lastname && <p className='text-sm text-red-400'>{errors.lastname.message}</p>}

        <input
          className='focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-full text-sm text-white placeholder-white rounded-2xl py-2 px-4 mt-2 bg-opacity-20 bg-white border-none font-extralight'
          aria-label='Teléfono'
          ref={register(rules.phone)}
          name='phone'
          type='tel'
          tabIndex={3}
          placeholder='Teléfono'
        />
        {errors.phone && <p className='text-sm text-red-400'>{errors.phone.message}</p>}

        <input
          className='focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none w-full text-sm text-white placeholder-white rounded-2xl py-2 px-4 mt-2 bg-opacity-20 bg-white border-none font-extralight'
          aria-label='Correo Electrónico'
          name='email'
          ref={register(rules.email)}
          type='email'
          autoComplete='on'
          spellCheck='false'
          tabIndex={4}
          placeholder='Correo Electrónico (No Obligatorio)'
        />
        {errors.email && <p className='text-sm text-red-400'>{errors.email.message}</p>}

        <div className='col-span-6 sm:col-span-3 mt-4'>
          <SelectChairs handleSelectors={handleSelectors} />
        </div>

        <div className='flex justify-center flex-col text-center text-white mt-5 text-sm'>
          {reservations.loading ? <Spinner /> : <SelectWorship handleSelectors={handleSelectors} reservations={reservations} />}
        </div>

        <section className='mt-2'>
          <button tabIndex={7} type='submit' className='bg-yellow-400 mt-4 w-48 py-2 rounded-2xl text-xs font-normal text-center text-white'>
            Reservar
          </button>
        </section>
      </form>
    </div>
  )
}
