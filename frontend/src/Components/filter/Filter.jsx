import React, { useState } from "react";
import "./filter.css"
import {useSearchParams} from "react-router-dom"

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || 0,
    maxPrice: searchParams.get("maxPrice") || 100000,
    bedroom: searchParams.get("bedroom") || "",
  });
  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    setSearchParams(query);
  };
  
  return (
    <>
      <div className="filter flex flex-col gap-4">
        <h1 className="text-xl font-light">
        Search results for <b>{searchParams.get("city")}</b>
        </h1>

        {/* Top */}
        <div className="top ">
          <div className="item ">
            <label htmlFor="city">City</label>
            <input
              className=""
              type="text"
              name="city"
              id="city"
              placeholder="City Location"
              onChange={handleChange}
              defaultValue={query.city}
            />
          </div>
        </div>

        {/* ty */}
        <div className="bottom flex justify-start items-end flex-wrap gap-3">
          <div className="item w-[100px] ">
            <label htmlFor="type">Type</label>
            <select name="type" id="type" className="p-3"  onChange={handleChange}
            defaultValue={query.type}>
              <option value="">Any</option>
              <option value="rent">Rent</option>
              <option value="buy">Buy</option>
            </select>
          </div>
          <div className="item w-[100px] ">
            <label htmlFor="property">Property</label>
            <select name="property" id="property" className=" p-3" onChange={handleChange}
            defaultValue={query.property}>
              <option value="">Any</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="land">Land</option>
            </select>
          </div>
          <div className="item w-[100px] ">
            <label htmlFor="minPrice">Min Price</label>
            <input
              className=""
              type="number"
              name="minPrice"
              id="minPrice"
              placeholder="any"
               onChange={handleChange}
            defaultValue={query.minPrice}
            />
          </div>
          <div className="item w-[100px] ">
            <label htmlFor="maxPrice">maxPrice</label>
            <input
              className=""
              type="number"
              name="maxPrice"
              id="maxPrice"
              placeholder="any"
               onChange={handleChange}
            defaultValue={query.maxPrice}
            />
          </div>
          <div className="item w-[100px] ">
            <label htmlFor="bedroom">Bed Romms</label>
            <input
              className=""
              type="number"
              name="bedroom"
              id="bedroom"
              placeholder="any"
              onChange={handleChange}
            defaultValue={query.bedroom}
            />
          </div>

          
          <button onClick={handleFilter} className=" item w-[100px]  rounded-md bg-yellow-400 flex justify-center items-center">
            <img className=" p-3" src="/search.png " alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
