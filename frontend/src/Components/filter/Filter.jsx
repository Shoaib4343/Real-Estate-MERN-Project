import React from "react";
import "./filter.css"

const Filter = () => {
  return (
    <>
      <div className="filter flex flex-col gap-4">
        <h1 className="text-xl font-light">
          Search result for <b>London</b>
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
            />
          </div>
        </div>

        {/* bottom */}
        <div className="bottom flex justify-start items-end flex-wrap gap-3">
          <div className="item w-[100px] ">
            <label htmlFor="type">Type</label>
            <select name="type" id="type" className="p-3">
              <option value="">Any</option>
              <option value="rent">Rent</option>
              <option value="buy">Buy</option>
            </select>
          </div>
          <div className="item w-[100px] ">
            <label htmlFor="property">Property</label>
            <select name="property" id="property" className=" p-3">
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
            />
          </div>
          <div className="item w-[100px] ">
            <label htmlFor="betRomms">Bed Romms</label>
            <input
              className=""
              type="text"
              name="betRomms"
              id="betRomms"
              placeholder="any"
            />
          </div>

          
          <button className=" item w-[100px]  rounded-md bg-yellow-400 flex justify-center items-center">
            <img className=" p-3" src="/search.png " alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
