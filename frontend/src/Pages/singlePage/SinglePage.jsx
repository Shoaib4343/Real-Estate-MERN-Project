import React from "react";
import Slider from "../../Components/slider/Slider";
import { singlePostData, userData } from "../../lib/listDummydata";

const SinglePage = () => {
  return (
    <div className="flex justify-between h-[calc(100vh-6rem)] container mx-auto px-4 ">
      {/* left Side  */}
      <div className="details  w-3/5">
        <div className="wrapper pr-12">
          <Slider images={singlePostData.images} />

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
      <div className="features  w-2/5 bg-gray-300">
        <div className="wrapper px-5"></div>
      </div>
    </div>
  );
};

export default SinglePage;
