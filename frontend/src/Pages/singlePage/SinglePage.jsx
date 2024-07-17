import React from "react";
import Slider from "../../Components/slider/Slider";
import { singlePostData, userData } from "../../lib/listDummydata";
import Map from "../../Components/map/Map";

const SinglePage = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row  container mx-auto w-full px-4 ">
      {/* left Side  */}
      <div className="details  lg:w-3/5">
        <div className="wrapper lg:pr-12">
          <div className="mb-36 md:mb-0">
            <Slider images={singlePostData.images} />
          </div>

          <div className="info mt-10">
            <div className="top flex justify-between">
              <div className="post flex flex-col gap-4">
                <h1 className="text-2xl font-normal">{singlePostData.title}</h1>
                <div className="address flex items-center gap-1">
                  <img className="size-4" src="/pin.png" alt="" />
                  <span className="text-gray-500">{singlePostData.address} </span>
                </div>
                <span className="text-xl bg-yellow-400 px-4 py-2 rounded-lg" style={{width:"max-content"}}>${singlePostData.price} </span>
              </div>
              <div className="user bg-yellow-200 p-4 flex flex-col justify-center items-center gap-4 px-12 rounded-xl">
                <img
                  className="w-14 h-14 rounded-full object-cover "
                  src={userData.img}
                  alt=""
                />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom mt-12 text-gray-500 leading-5 pb-10">
                {singlePostData.description}
            </div>
          </div>
        </div>
      </div>















      {/* right side  */}
      <div className="features pb-10 w-full rounded-lg lg:rounded-none lg:w-2/5 bg-gray-300">
        <div className="wrapper px-5 py-5 lg:py-0 flex flex-col gap-4">



          {/* Generals */}
          <p className="title text-[18px] font-bold">General</p>
          <div className="listVertical  bg-white flex flex-col gap-4 px-5 py-3 rounded-lg">
            <div className="feature flex gap-2  items-center ">
              <img className="size-6" src="/utility.png" alt="" />
              <div className="text">
                <h1 className="font-semibold">Utilites</h1>
                <p className="text-sm">Rent is Responsible</p>
              </div>
            </div>
            <div className="feature flex gap-2  items-center">
              <img className="size-6" src="/pet.png" alt="" />
              <div className="text">
                <h1 className="font-semibold">Pet Policy</h1>
                <p className="text-sm">Pet are Allowed.</p>
              </div>
            </div>
            <div className="feature flex gap-2  items-center">
              <img className="size-6" src="/fee.png" alt="" />
              <div className="text">
                <h1 className="font-semibold">Property Fees</h1>
                <p className="text-sm">Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>



          {/* room Sizes */}
          <p className="title text-[18px]  font-bold ">Room Sizes</p>
          <div className="listHorizantle flex justify-between">
            <div className="size flex justify-between items-center gap-2 bg-white p-2 rounded-lg ">
              <img className="size-6 lg:size-4 xl:size-6 " src="/size.png" alt="" />
              <span>80sqft</span>
            </div>
            <div className="size flex justify-between items-center gap-2 bg-white p-2 rounded-lg ">
              <img className="size-6 lg:size-4 xl:size-6" src="/bed.png" alt="" />
              <span>2 bedrooms</span>
            </div>
            <div className="size flex justify-between items-center gap-2 bg-white p-2 rounded-lg ">
              <img className="size-6 lg:size-4 xl:size-6" src="/bath.png" alt="" />
              <span>2 bathrooms</span>
            </div>
          </div>





          {/* nearby Places */}
          <p className="title text-[18px] font-bold">Nearby Places</p>
          <div className="listhorizantle  bg-white flex justify-between gap-4 px-5 py-3 rounded-lg">
            <div className="feature flex gap-2  items-center">
              <img className="size-6 lg:size-4 xl:size-6" src="/school.png" alt="" />
              <div className="text">
                <h1 className="font-semibold text-md">School</h1>
                <p className="text-xs">250m away</p>
              </div>
            </div>
            <div className="feature flex gap-2  items-center">
              <img className="size-6 lg:size-4 xl:size-6" src="/bus.png" alt="" />
              <div className="text">
                <h1 className="font-semibold text-md">Bus Stop</h1>
                <p className="text-xs">200m away</p>
              </div>
            </div>
            <div className="feature flex gap-2  items-center">
              <img className="size-6 lg:size-4 xl:size-6" src="/utility.png" alt="" />
              <div className="text">
                <h1 className="font-semibold text-md">Restaurant</h1>
                <p className="text-xs">150m away</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <p className="title text-[18px] font-bold mb-2">Location</p>
          <div className="mapContain w-full h-48">
            <Map item={[singlePostData]} />
          </div>

          {/* buttons */}
          <div className="buttons flex justify-between">
            <button className="flex items-center p-5 border border-black/50 gap-2">
              <img className="size-4" src="/chat.png" alt="" />
              <span>Send a message</span>
            </button>
            <button className="flex items-center p-5 border border-black/50 gap-2">
              <img className="size-4" src="/save.png" alt="" />
              <span>Save the Place</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
