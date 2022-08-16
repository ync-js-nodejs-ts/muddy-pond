import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Spinner } from 'components/common/Loader'

export const ThemeImage = () => {
  const [headerImg, setHeaderImg] = useState('')

  useEffect(() => {
    if (window) {
      fetch('img/HeaderHome.webp').then((res) => {
        if (res.status === 404) {
          console.log('No hay imagen, hay que buscarla')
        } else {
          setHeaderImg('/img/HeaderHome.webp')
        }
      })
    }
  }, [])

  return (
    <section className='w-full mt-10'>
      <div className='flex justify-center'>
        {headerImg === '' ? (
          <div style={{ height: '400px', width: '820px' }} className='rounded bg-gray-400 animate-pulse'>
            <Spinner message='Cargando Imagen' />
          </div>
        ) : (
          <Image
            className='rounded'
            src={headerImg}
            alt='La Casa de mi Padre - Logo'
            width={820}
            height={400}
            priority
            objectFit='cover'
            quality={100}
          />
        )}
      </div>
    </section>
  )
}
