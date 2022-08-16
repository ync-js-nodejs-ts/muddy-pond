import dynamic from 'next/dynamic'
import { Spinner } from 'components/common/Loader'

const MapBox = dynamic(() => import('components/common/Contact/Map'), { ssr: false, loading: () => <Spinner message='Cargando Mapa...' /> })

export const WeAreHere = () => (
  <section className='max-w-3xl mx-auto mt-10 px-4'>
    <MapBox />
  </section>
)
