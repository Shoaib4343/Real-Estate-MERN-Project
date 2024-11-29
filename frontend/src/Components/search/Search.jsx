

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
