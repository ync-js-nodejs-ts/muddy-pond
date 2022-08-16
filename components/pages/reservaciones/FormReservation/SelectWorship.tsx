import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { IReservations } from 'types'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const SelectWorship = ({ reservations, handleSelectors }: { reservations: IReservations; handleSelectors: any }) => {
  const schedules = [
    {
      id: 1,
      name: '1er Servicio (8:30 a.m)',
      reservations: reservations.firstWorship,
      isAviable: reservations.firstWorship <= reservations.maxReservations,
    },
    {
      id: 2,
      name: '2do Servicio (10:15 a.m)',
      reservations: reservations.secondWorship,
      isAviable: reservations.secondWorship <= reservations.maxReservations,
    },
    {
      id: 3,
      name: '3er Servicio (12:00 p.m)',
      reservations: reservations.thirdWorship,
      isAviable: reservations.thirdWorship <= reservations.maxReservations,
    },
  ]

  // Evitamos que se eliga por defecto un horario no disponible
  const firstScheduleAvialbe = schedules.find((schedule) => schedule.isAviable === true)

  const [selected, setSelected] = useState(firstScheduleAvialbe)

  useEffect(() => {
    handleSelectors({ schedule: selected.name })
  }, [selected])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className='block text-sm font-normal text-white'>Horario del servicio</Listbox.Label>
          <div className='mt-1 relative'>
            <Listbox.Button
              tabIndex={6}
              className='relative w-full bg-opacity-20 bg-white rounded-2xl shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 sm:text-sm'
            >
              <span className='flex items-center'>
                <span className='ml-3 block truncate text-sm font-normal text-white'>{selected.name}</span>
              </span>
              <span className='ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                <SelectorIcon className='h-5 w-5 text-white' aria-hidden='true' />
              </span>
            </Listbox.Button>

            <Transition show={open} as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
              <Listbox.Options
                static
                className='absolute mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'
              >
                {schedules.map((schedule) => (
                  <Listbox.Option
                    key={schedule.id}
                    disabled={!schedule.isAviable}
                    className={({ active }) =>
                      classNames(active ? 'text-white bg-yellow-400' : 'text-gray-900', 'cursor-default select-none relative py-2 px-1')
                    }
                    value={schedule}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className='flex items-center'>
                          {!schedule.isAviable ? (
                            <span className='ml-2 text-sm text-black'>
                              {schedule.name} <small className='text-red-400'>No Disponible</small>
                            </span>
                          ) : (
                            <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-2 block truncate text-black')}>
                              {schedule.name}
                            </span>
                          )}
                        </div>

                        {selected ? (
                          <span
                            className={classNames(active ? 'text-white' : 'text-yellow-500', 'absolute inset-y-0 right-0 flex items-center pr-4')}
                          >
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
