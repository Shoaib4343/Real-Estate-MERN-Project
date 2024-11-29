// import React, { useContext } from "react";
// import "./Home.css";
// import Search from "../../Components/search/Search";
// import { AuthContext } from "../../../context/AuthContext";

// const Home = () => {
//   const { currentUser } = useContext(AuthContext);
//   // console.log('cureent user data with context api',currentUser)
//   return (
//     <div className="container mx-auto flex justify-between items-center md:h-[calc(100vh-6rem)] px-4 mb-10 ">
//       {/* Left Side Content */}
//       <div
//         className=" flex flex-col  gap-5 
//         md:w-3/5 md:flex-[3] md:justify-between
//        "
//       >
//         <h1 className="text-6xl font-bold md:w-[90%]">
//           Find Real Estate And Get Your Dream Place
//         </h1>
//         <p className="md:w-[90%]">
//           Whether you're looking to buy your dream home or sell your property
//           quickly and efficiently, we are here to help. Explore a variety of
//           listings, experience a seamless real estate journey tailored to your
//           needs.
//         </p>

//         {/* Serach Component */}
//         <Search />

//         <div className="hidden md:flex justify-between  pb-10 w-4/5">
//           <div>
//             <h1 className="font-bold text-4xl">10+</h1>
//             <h2 className="text-lg text-gray-600">Years of Experience</h2>
//           </div>
//           <div>
//             <h1 className="font-bold text-4xl">30+</h1>
//             <h2 className="text-lg text-gray-600">Awards Gained</h2>
//           </div>
//           <div>
//             <h1 className="font-bold text-4xl">100+</h1>
//             <h2 className="text-lg text-gray-600">Property Ready</h2>
//           </div>
//         </div>
//       </div>

//       {/* Right Side Image */}
//       <div className="hidden lg:block flex-[2] bg-gray-300 h-full relative overflow-visible  md:w-2/5">
//         <img
//           src="/bg.png"
//           alt=""
//           className="absolute top-0 -left-8  scale-110  h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useContext } from "react";
import "./Home.css";
import Search from "../../Components/search/Search";
import { AuthContext } from "../../../context/AuthContext";
import Testimonials from "../../Components/Testimonials";
import AboutUsComponent from "../../Components/AboutUsComponent";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log('cureent user data with context api',currentUser)
  return (
    <div className="container mx-auto px-4 mb-10">
      {/* Main Section */}
      <div className="flex justify-between items-center md:h-[calc(100vh-6rem)] mb-16">
        {/* Left Side Content */}
        <div
          className="flex flex-col gap-5 
          md:w-3/5 md:flex-[3] md:justify-between"
        >
          <h1 className="text-6xl font-bold md:w-[90%]">
            Find Real Estate And Get Your Dream Place
          </h1>
          <p className="md:w-[90%]">
            Whether you're looking to buy your dream home or sell your property
            quickly and efficiently, we are here to help. Explore a variety of
            listings, experience a seamless real estate journey tailored to your
            needs.
          </p>

          {/* Search Component */}
          <Search />

          <div className="hidden md:flex justify-between pb-10 w-4/5">
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
        <div className="hidden lg:block flex-[2] bg-gray-300 h-full relative overflow-visible md:w-2/5">
          <img
            src="/bg.png"
            alt=""
            className="absolute top-0 -left-8 scale-110 h-full object-cover"
          />
        </div>
      </div>

      {/* About Us: Services */}
     <AboutUsComponent/>

      



      {/* testamonilas */}
      <Testimonials />
    </div>
  );
};

export default Home;
