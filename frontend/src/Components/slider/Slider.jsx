import React, { useState } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null)

  const changeDirections = (direction)=>{
    if(direction==="left"){
      if(imageIndex === 0){
        setImageIndex(images.length-1)
      }else{
        setImageIndex(imageIndex -1)
      }
    }else{
      if(imageIndex === images.length-1){
        setImageIndex(0)
      }else{
        setImageIndex(imageIndex +1)
      }
    }
  }
  return (
    <div className=" ">
      {imageIndex !== null && (
        <div className="w-full h-screen bg-black fixed top-0 left-0 z-[9999] ">
        <div  onClick={() => changeDirections("left")}
          className="  absolute  top-1/2 left-8 cursor-pointer">
          <IoMdArrowBack className="  text-white text-4xl " />
        </div>
        <div
          onClick={() => changeDirections("right")}
          className="  absolute  top-1/2 right-8 cursor-pointer"
        >
          <IoMdArrowForward className="  text-white  text-4xl " />
        </div>
        <div  onClick={()=>setImageIndex(null)}
          className="  absolute  top-10 right-8 cursor-pointer">
          <RxCross1 className="  text-white text-xl " />
        </div>

        <div className="w-[80%] h-screen mx-auto flex justify-center items-center">
          <img className="w-full h-auto rounded-lg" src={images[imageIndex]} alt="" />
        </div>
      </div>
      )}





      {/* images grid */}
      <div className="flex flex-col md:flex-row justify-between w-full h-[350px] gap-5 rounded-lg">
        <div className="bigImage ">
          <img 
            onClick={()=>setImageIndex(0)}
            className="w-full h-[100%] object-cover rounded-lg"
            src={images[0]}
            alt=""
          />
        </div>
        <div className="smallImage flex md:flex-col justify-between gap-4 ">
          {images.slice(1).map((img,index) => (
            <img className="h-28 object-cover rounded-lg w-full" src={img} key={index} alt="" onClick={()=>setImageIndex(index + 1)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
