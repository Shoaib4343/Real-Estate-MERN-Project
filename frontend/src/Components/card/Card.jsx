import React from 'react'
import { Link } from 'react-router-dom'
import "./card.css"

const Card = ({ val }) => {
    return (
       
        <div className='flex w-full  gap-3 mt-5'>
           <div className=" w-2/5 h-48">

             {/* image Container */}
               <Link to={`/${val.id}`}>
                    <img className='w-full h-[100%] object-cover object-center rounded-xl' src={val.img} alt={val.title} />
               </Link>
           </div>


            {/* Text Section */}
           <div className=" w-3/5 flex flex-col justify-between gap-3">

               {/* Tittle */}
                <h3 className='text-xl font-semibold text-gray-700'>
                   <Link to={`/${val.id}`}> {val.title} </Link>
               </h3>
                
                {/* Address */}
                <p className='flex items-center text-gray-500 text-sm gap-1'>
                    <img className='size-4'  src="/pin.png " alt="" />
                    <span>{val.address}</span>
                </p>
                   
                   
                {/* price */}
                <p className='bg-yellow-200 text-xl max-w-max-content p-2 rounded-md'>${val.price}</p>

                {/* Bootom Section of the Card */}
                <div className="flex justify-between items-center">
                    {/* Left Side Rooms */}
                    <div className="flex justify-between items-center gap-2">
                        <div className="flex justify-between items-center gap-2 bg-gray-100 rounded p-2">
                            <img className='size-4' src="/bed.png" alt="" />
                            <span> {val.bedroom} Bedrooms</span>
                        </div>
                        <div className="flex justify-between items-center gap-2 bg-gray-100 rounded p-2">
                            <img className='size-4' src="/bath.png" alt="" />
                            <span>{val.bathroom} BathRoom</span>
                        </div>
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex  gap-5">
                        <div className='border px-2 py-1 rounded cursor-pointer flex justify-center items-center hover:bg-gray-100'>
                            <img className='size-4' src="/save.png" alt="" />
                        </div>
                        <div className='border px-2 py-1 rounded cursor-pointer flex justify-center items-center hover:bg-gray-100'>
                            <img className='size-4' src="/chat.png" alt="" />
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Card
