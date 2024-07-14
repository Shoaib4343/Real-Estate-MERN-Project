import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'

const MarkerWithPopup = ({ val }) => {
  return (
    <Marker position={[val.latitude, val.longitude]}>
      <Popup>
        <img 
          src={val.img} 
          alt={val.title} 
          className="w-full min-w-64  h-32 object-cover mb-2 rounded-md shadow-xl" 
          
        />
        <div className="space-y-2">
          <Link to={`/${val.id}`}>
            <h1 className="text-lg font-bold leading-tight">{val.title}</h1>
          </Link>
          <p className="leading-tight">Bedrooms: <b>{val.bedroom}</b></p>
          <p className="leading-tight">Bathrooms: <b>{val.bathroom}</b></p>
          <p className="leading-tight">Price: <b>${val.price}</b> </p>
        </div>
      </Popup>
    </Marker>
  )
}

export default MarkerWithPopup
