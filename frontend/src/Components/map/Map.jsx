import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import PopUp from '../popUp/PopUp'
const Map = ({item}) => {
  return (
    <MapContainer
     center={ item.length === 1
      ? [item[0].latitude, item[0].longitude]
      :[35.2227,72.4258]} 
      zoom={7} scrollWheelZoom={false} className='w-[100%] h-[100%]  rounded-xl'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {item.map(val=>(
      <PopUp val={val} key={val.id} />
    ))}
  </MapContainer>
  )
}

export default Map