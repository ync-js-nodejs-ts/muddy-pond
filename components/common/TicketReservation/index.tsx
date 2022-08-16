import { useRouter } from 'next/router'
import { Fragment, useRef, useContext } from 'react'
import { TicketContext } from 'context/ModalContext'
import { Dialog, Transition } from '@headlessui/react'
import { IconTicket } from '../Icons'
import { Spinner } from '../Loader'

export const TicketReservation = () => {
  const { ticket, ticketDispatch } = useContext(TicketContext)
  const router = useRouter()
  const mainCTA = useRef()

  if (ticket.isLoading)
    return (
      <div className='flex z-20 fixed top-0 bg-black bg-opacity-60 items-end justify-center h-full w-full'>
        <Spinner message='Enviando reservación...' />
      </div>
    )

  return (
    <Transition.Root show={ticket.isOpen} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed z-20 inset-0 overflow-y-auto'
        initialFocus={mainCTA}
        open={ticket.isOpen}
        onClose={(value) => ticketDispatch({ type: 'ticketClose' })}
      >
        <div className='flex items-center justify-center min-h-screen py-4 px-4 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-60 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='inline-block -mt-6 align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-72 tabletmin:w-96'>
              <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div className='flex flex-col justify-center items-center'>
                  <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10'>
                    {/* <ExclamationIcon className='h-6 w-6 text-red-600' aria-hidden='true' /> */}
                    <IconTicket width={25} height={25} />
                  </div>

                  <div className='mt-6 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                    <Dialog.Title as='h3' className='text-lg leading-6 font-medium text-gray-900'>
                      Ticket de Reservación
                    </Dialog.Title>

                    <div className='mt-4 text-center'>
                      <p className='text-gray-500'>{`${ticket.name} ${ticket.lastname}`}</p>
                      <small>{ticket.schedule}</small> <br />
                      <small>Numero de asientos: {ticket.chairs}</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-gray-50 px-4 py-3 sm:px-6 flex justify-center items-center flex-row-reverse'>
                <button
                  type='button'
                  ref={mainCTA}
                  className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm'
                  onClick={() => {
                    ticketDispatch({ type: 'ticketClose' })
                    router.push('/')
                  }}
                >
                  Ir al inicio
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
