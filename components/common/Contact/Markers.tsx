import { Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const Markers = () => {
  const router = useRouter()

  return (
    <Marker position={{ lat: 10.502159125755705, lng: -66.90064118922413 }}>
      <Popup className='markerPop'>
        <figure className='bg-blue-800 px-2 py-2 rounded flex justify-center items-center mb-1'>
          <Image
            src='/img/logo.webp'
            alt='La Casa de mi Padre - Logo'
            width={45}
            height={26}
            priority
            className='unSelectElement'
            unselectable='on'
            onClick={() => router.push('/admin/login')}
          />
        </figure>
        Edificio Santa Fe.
      </Popup>
    </Marker>
  )
}
