// import React, { useState } from 'react'

// const Search = () => {
//   const types = ["rent","buy"]
//   const [query, setQuery] = useState({
//     type: "rent",
//     location: "",
//     minPrice: 0,
//     maxPrice: 0
//   })
//   // Button Switch function
//   const switchBtn = (val) => {
//     setQuery((prev)=>  ({...prev,type:val}) )
//   }

//   return (
//     <div className='md:w-[90%]'>
//       <div className="btn">
//         {
//           types.map((type,index)=>(
//             <button
//             key={type}
//               className={`py-4 px-8 capitalize border-t border-gray-400    ${query.type === type ? 'bg-black text-white': ''} ${index === 0 ? 'rounded-tl-xl border-l' : 'rounded-tr-xl border-r'}`}
//               onClick={()=>switchBtn(type)}
//             >
//               {type}
//             </button>

//           ))
//         }

//       </div>
//       <form action=""
//        className='
//          flex flex-col  gap-5
//          md:border md:border-gray-400 md:h-16 md:gap-1 md:flex-row md:justify-between

//         '>
//         <input className=' border border-gray-400 md:border-none w-full h-16 md:h-auto px-3 md:w-3/12 ' type="text" name="location" id="" placeholder='City Location' />
//         <input className=' border border-gray-400 md:border-none w-full h-16 md:h-auto px-3 md:w-3/12' type="number" name="minPrice" min={0} max={10000000} id="" placeholder='Min Price' />
//         <input className=' border border-gray-400 md:border-none w-full h-16 md:h-auto px-3 md:w-3/12' type="number" name="maxPrice" min={0} max={10000000} id="" placeholder='Max Price' />
//         <span  className='bg-yellow-500 cursor-pointer  w-full h-16 md:h-auto md:w-2/12 flex justify-center items-center'>
//          <img src="/search.png" alt="" className='w-6 h-6' />
//         </span>
//       </form>
//     </div>
//   )
// }

// export default Search

import React, { useState } from "react";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

const Search = () => {
  const [query, setQuery] = useState({
    type: "buy", // default type
    city: "",
    minPrice: 0,
    maxPrice: 10000000,
  });

  // Button switch for buy/rent type
  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  // Handle input changes for city, minPrice, maxPrice
  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="md:w-[90%]">
      {/* Property Type Selector */}
      <div className="btn">
        {types.map((type, index) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={`py-4 px-8 capitalize border-t border-gray-400    ${
              query.type === type ? "bg-black text-white" : ""
            } ${
              index === 0 ? "rounded-tl-xl border-l" : "rounded-tr-xl border-r"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Search Form */}
      <form
        className="flex flex-col  gap-5 
         md:border md:border-gray-400 md:h-16 md:gap-1 md:flex-row md:justify-between
 "
      >
        {/* City Input */}
        <input
          type="text"
          name="city"
          placeholder="City"
          value={query.city}
          onChange={handleChange}
          className="border border-gray-400 md:border-none w-full h-16 md:h-auto px-3 md:w-3/12"
        />

        {/* Min Price Input */}
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={query.minPrice >= 0 ? null : query.minPrice}
          onChange={handleChange}
          className="border border-gray-400 md:border-none w-full h-16 md:h-auto px-3 md:w-3/12"
        />

        {/* Max Price Input */}
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={query.maxPrice == 10000000 ? null : query.maxPrice}
          onChange={handleChange}
          className="border border-gray-400 md:border-none w-full h-16 md:h-auto px-3 md:w-3/12"
        />

        {/* Search Button with Link */}
        {/* Search Button with Link */}
        <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
          className="md:w-2/12 w-full h-16 md:h-auto"
        >
          <button className="w-full h-full flex justify-center items-center bg-yellow-400">
            <img
              src="/search.png"
              alt="Search"
              className="w-10 h-10 object-contain"
            />
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Search;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const types = ["buy", "rent"];

// const Search = () => {
//   const [query, setQuery] = useState({
//     type: "buy", // default type
//     city: "",
//     minPrice: 0,
//     maxPrice: 0
//   });

//   // Button switch for buy/rent type
//   const switchType = (val) => {
//     setQuery((prev) => ({ ...prev, type: val }));
//   };

//   // Handle input changes for city, minPrice, maxPrice
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setQuery((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="w-full max-w-screen-lg mx-auto py-6 px-4">
//       {/* Property Type Selector */}
//       <div className="flex gap-4 mb-6">
//         {types.map((type) => (
//           <button
//             key={type}
//             onClick={() => switchType(type)}
//             className={`py-2 px-6 text-lg font-semibold border rounded-t-lg transition-all duration-300
//               ${query.type === type ? 'bg-black text-white' : 'bg-transparent text-gray-600 border-gray-400'}`}
//           >
//             {type}
//           </button>
//         ))}
//       </div>

//       {/* Search Form */}
//       <form className="flex flex-col gap-4 md:flex-row md:gap-6">
//         {/* City Input */}
//         <input
//           type="text"
//           name="city"
//           placeholder="City"
//           value={query.city}
//           onChange={handleChange}
//           className="w-full md:w-1/4 p-4 border border-gray-400 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//         />

//         {/* Min Price Input */}
//         <input
//           type="number"
//           name="minPrice"
//           placeholder="Min Price"
//           value={query.minPrice}
//           onChange={handleChange}
//           className="w-full md:w-1/4 p-4 border border-gray-400 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//         />

//         {/* Max Price Input */}
//         <input
//           type="number"
//           name="maxPrice"
//           placeholder="Max Price"
//           value={query.maxPrice}
//           onChange={handleChange}
//           className="w-full md:w-1/4 p-4 border border-gray-400 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//         />

//         {/* Search Button with Link */}
//         <Link
//           to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
//         >
//           <button className="w-full md:w-1/6 bg-yellow-500 p-4 rounded-lg flex justify-center items-center text-white text-lg">
//             <img src="/search.png" alt="Search" className="w-6 h-6" />
//           </button>
//         </Link>
//       </form>
//     </div>
//   );
// };

// export default Search;
