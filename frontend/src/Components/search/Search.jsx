import React, { useState } from 'react'

const Search = () => {
  const types = ["rent","buy"]
  const [query, setQuery] = useState({
    type: "rent",
    location: "",
    minPrice: 0,
    maxPrice: 0
  })
  // Button Switch function
  const switchBtn = (val) => {
    setQuery((prev)=>  ({...prev,type:val}) )
  }
  
  return (
    <div className='md:w-[90%]'>
      <div className="btn">
        {
          types.map((type,index)=>(
            <button key={type} 
              className={`py-4 px-8 capitalize border-t border-gray-400    ${query.type === type ? 'bg-black text-white': ''} ${index === 0 ? 'rounded-tl-xl border-l' : 'rounded-tr-xl border-r'}`}
              onClick={()=>switchBtn(type)}
            >
              {type}
            </button>

          ))
        }
        




       

        
      </div>
      <form action="" 
       className='
         flex flex-col  gap-5 
         md:border md:border-gray-400 md:h-16 md:gap-1 md:flex-row md:justify-between
 

        '>
        <input className=' border border-gray-400 md:border-none w-full h-16 md:h-auto px-3 md:w-3/12 ' type="text" name="location" id="" placeholder='City Location' />
        <input className=' border border-gray-400 md:border-none w-full h-16 md:h-auto px-3 md:w-3/12' type="number" name="minPrice" min={0} max={10000000} id="" placeholder='Min Price' />
        <input className=' border border-gray-400 md:border-none w-full h-16 md:h-auto px-3 md:w-3/12' type="number" name="maxPrice" min={0} max={10000000} id="" placeholder='Max Price' />
        <span  className='bg-yellow-500 cursor-pointer  w-full h-16 md:h-auto md:w-2/12 flex justify-center items-center'>
         <img src="/search.png" alt="" className='w-6 h-6' />
        </span>
      </form>
    </div>
  )
}

export default Search