import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'

const chairsAviable = [
  {
    id: 1,
    name: '1',
  },
  {
    id: 2,
    name: '2',
  },
  {
    id: 3,
    name: '3',
  },
  {
    id: 4,
    name: '4',
  },
  {
    id: 5,
    name: '5',
  },
  {
    id: 6,
    name: '6',
  },
  {
    id: 7,
    name: '7',
  },
  {
    id: 8,
    name: '8',
  },
  {
    id: 9,
    name: '9',
  },
  {
    id: 10,
    name: '10',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const SelectChairs = ({ handleSelectors }) => {
  const [selected, setSelected] = useState(chairsAviable[0])

  useEffect(() => {
    handleSelectors({ chairs: Number(selected.name) })
  }, [selected])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className='block text-sm font-normal text-white'>Números de asientos</Listbox.Label>
          <div className='mt-1 relative'>
            <Listbox.Button
              tabIndex={5}
              className='relative h-9 w-full bg-opacity-20 bg-white rounded-2xl shadow-sm py-2 text-center cursor-default focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 sm:text-sm'
            >
              <span className='flex w-full justify-center items-start pl-5'>
                <span className='block truncate font-light text-white'>{selected.name}</span>
                {/* <span className='ml-3 pr-36 tabletmin:pr-48 absolute inset-y-0 right-0 flex items-center pointer-events-none'> */}
                <div>
                  <svg viewBox='0 0 48 48' width='34px' height='34px' className='-mt-1.5 tabletmin:-mt-1'>
                    <path fill='white' d='M14 20l10 10 10-10z' />
                    <path d='M0 0h48v48h-48z' fill='none' />
                  </svg>
                </div>
              </span>
            </Listbox.Button>

            <Transition show={open} as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
              <Listbox.Options
                static
                className='z-10 customScroll absolute mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'
              >
                {chairsAviable.map((chair) => (
                  <Listbox.Option
                    key={chair.id}
                    className={({ active }) =>
                      classNames(active ? 'text-white bg-yellow-400' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9')
                    }
                    value={chair}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className='flex items-center'>
                          <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate text-black')}>
                            {chair.name}
                          </span>
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
