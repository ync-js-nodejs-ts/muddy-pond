import { MapContainer, TileLayer } from 'react-leaflet'
import { Markers } from './Markers'
import 'leaflet/dist/leaflet.css'

const MapView = () => {
  return (
    <div className='map w-full ml-10 text-center z-0 hidden tabletmin:block'>
      <MapContainer
        center={{ lat: 10.502159125755705, lng: -66.90064118922413 }}
        zoom={18}
        scrollWheelZoom={false}
        id='mapView'
        className='w-full mt-10 rounded'
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Markers />
      </MapContainer>

      {/* <div className='text-center mt-4'>
        <p className='text-sm text-white'>
          Edf. Santa Fe, Nivel Mezzanina. <br />
          Av. Sur 21. Entre Av. México y Este 2. <br />
          La Candelaria - Caracas. <br />
          (A media cuadra de la Estación Bellas Artes) <br />
          Telf.: 0212-578-5969 / 0424-149-8800
        </p>
      </div> */}
    </div>
  )
}

export default MapView
