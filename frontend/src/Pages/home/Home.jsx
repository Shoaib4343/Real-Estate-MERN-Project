import React from "react";
import "./Home.css";
import Search from "../../Components/search/Search";

const Home = () => {
  return (
    <div className="container mx-auto flex justify-between items-center md:h-[calc(100vh-6rem)] px-4 mb-10 ">
      {/* Left Side Content */}
      <div
        className=" flex flex-col  gap-5 
        md:w-3/5 md:flex-[3] md:justify-between
       "
      >
        <h1 className="text-6xl font-bold md:w-[90%]">
          Find Real Estate And Get Your Dream Place
        </h1>
        <p className="md:w-[90%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad numquam
          harum libero sed, voluptatibus voluptas minima, aliquid veritatis
          atque est nobis exercitationem obcaecati officia consequatur sint
          rerum et tenetur sunt.
        </p>
        {/* Serach Component */}
        <Search />
        <div className="hidden md:flex justify-between  pb-10 w-4/5">
          <div>
            <h1 className="font-bold text-4xl">10+</h1>
            <h2 className="text-lg text-gray-600">Years of Experience</h2>
          </div>
          <div>
            <h1 className="font-bold text-4xl">30+</h1>
            <h2 className="text-lg text-gray-600">Awards Gained</h2>
          </div>
          <div>
            <h1 className="font-bold text-4xl">100+</h1>
            <h2 className="text-lg text-gray-600">Property Ready</h2>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="hidden lg:block flex-[2] bg-gray-300 h-full relative overflow-visible  md:w-2/5">
        <img
          src="/bg.png"
          alt=""
          className="absolute top-0 -left-8  scale-110  h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
