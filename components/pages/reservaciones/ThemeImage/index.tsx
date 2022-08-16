import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Spinner } from 'components/common/Loader'

export const ThemeImage = () => {
  const [ReservationsImg, setReservationsImg] = useState('')

  useEffect(() => {
    if (window) {
      fetch('img/FormReservation.webp').then((res) => {
        if (res.status === 404) {
          console.log('No hay imagen, hay que buscarla')
        } else {
          setReservationsImg('/img/FormReservation.webp')
        }
      })
    }
  }, [])

  return (
    <div className='w-full flex justify-end items-center sm:justify-center'>
      {ReservationsImg === '' ? (
        <Spinner message='Cargando Imagen' />
      ) : (
        <Image
          className='rounded'
          src={ReservationsImg}
          alt='La Casa de mi Padre - Mantegamonos Unidos'
          width={420}
          height={450}
          priority
          objectFit='cover'
          quality={100}
        />
      )}
    </div>
  )
}
