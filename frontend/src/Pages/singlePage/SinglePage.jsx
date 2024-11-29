
// import React, { useState, useContext } from "react";
// import Slider from "../../Components/slider/Slider";
// import Map from "../../Components/map/Map";
// import { useLoaderData, useNavigate } from "react-router-dom";
// import DOMPurify from "dompurify";

// import { AuthContext } from "../../../context/AuthContext";
// import axios from "axios";

// const SinglePage = () => {
//   const post = useLoaderData();
//   const { currentUser } = useContext(AuthContext);
//   const navigate = useNavigate();
  
//   // State to track if the post is saved
//   const [saved, setSaved] = useState(post.isSaved);

//   // Handle save functionality
//   const handleSave = async () => {
//     if (!currentUser) {
//       navigate("/login"); // Redirect to login if not logged in
//       return;
//     }

//     // Optimistically update the save status
//     setSaved((prev) => !prev);

//     try {
//       // Make the API request to save the post
//       await axios.post("http://localhost:8800/user/save", { postId: post._id },{withCredentials:true});
//     } catch (err) {
//       console.error("Error saving the post:", err);
//       setSaved((prev) => !prev); // Rollback if there's an error
//     }
//   };


//  const handleChat = async () => {
//   if (!currentUser) {
//     navigate("/login"); // Redirect to login if not logged in
//     return;
//   }
//   if (post.user._id === currentUser._id) {
//     return;
//   }

//   try {
//     // Step 1: Check if the chat already exists
//     const { data: existingChats } = await axios.get("http://localhost:8800/chats", {
//       withCredentials: true, // Include cookies for authentication
//     });

//     const existingChat = existingChats.find((chat) =>
//       chat.userIDs.includes(post.user._id) && chat.userIDs.includes(currentUser._id)
//     );

//     if (existingChat) {
//       // Step 2: Redirect to the existing chat
//       navigate(`/profile`);
//       return;
//     }

//     // Step 3: If no existing chat, create a new one
//     const response = await axios.post(
//       "http://localhost:8800/chats",
//       {
//         receiverId: post.user._id, // The user who posted this ad
//       },
//       { withCredentials: true } // Include cookies for authentication
//     );

//     navigate(`/profile`); // Redirect to the created chat
//   } catch (err) {
//     console.error("Error handling chat:", err);
//   }
// };

  

//   if (!post) return <div>Loading...</div>;

//   return (
//     <div className="flex flex-col items-center lg:flex-row container mx-auto w-full px-4">
//       {/* Left Side */}
//       <div className="details lg:w-3/5">
//         <div className="wrapper lg:pr-12">
//           <div className="mb-36 md:mb-0">
//             <Slider images={post.images} />
//           </div>

//           <div className="info mt-10">
//             <div className="top flex justify-between">
//               <div className="post flex flex-col gap-4">
//                 <h1 className="text-2xl font-normal">{post.title}</h1>
//                 <div className="address flex items-center gap-1">
//                   <img className="size-4" src="/pin.png" alt="" />
//                   <span className="text-gray-500">{post.address}</span>
//                 </div>
//                 <span className="text-xl bg-yellow-400 px-4 py-2 rounded-lg" style={{ width: "max-content" }}>
//                   ${post.price}
//                 </span>
//               </div>
//               <div className="user bg-yellow-200 p-4 flex flex-col justify-center items-center gap-4 px-12 rounded-xl">
//                 <img className="w-14 h-14 rounded-full object-cover" src={post.user.avatar} alt="" />
//                 <span>{post.user.username}</span>
//               </div>
//             </div>

//             <div className="bottom mt-12 text-gray-500 leading-5 pb-10" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.postDetail.desc) }} />
//           </div>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="features pb-10 w-full rounded-lg lg:rounded-none lg:w-2/5 bg-gray-300">
//         <div className="wrapper px-5 py-5 lg:py-0 flex flex-col gap-4">
//           {/* Generals */}
//           <p className="title text-[18px] font-bold">General</p>
//           <div className="listVertical bg-white flex flex-col gap-4 px-5 py-3 rounded-lg">
//             <div className="feature flex gap-2 items-center">
//               <img className="size-6" src="/utility.png" alt="" />
//               <div className="text">
//                 <h1 className="font-semibold">Utilities</h1>
//                 {post.postDetail.utilities === "owner" ? <p>Owner is responsible</p> : <p>Tenant is responsible</p>}
//               </div>
//             </div>
//             <div className="feature flex gap-2 items-center">
//               <img className="size-6" src="/pet.png" alt="" />
//               <div className="text">
//                 <h1 className="font-semibold">Pet Policy</h1>
//                 {post.postDetail.pet === "allowed" ? <p>Pets Allowed</p> : <p>Pets not Allowed</p>}
//               </div>
//             </div>
//             <div className="feature flex gap-2 items-center">
//               <img className="size-6" src="/fee.png" alt="" />
//               <div className="text">
//                 <h1 className="font-semibold">Property Fees</h1>
//                 <p>{post.postDetail.income}</p>
//               </div>
//             </div>
//           </div>

//           {/* Room Sizes */}
//           <p className="title text-[18px] font-bold">Room Sizes</p>
//           <div className="listHorizantle flex justify-between">
//             <div className="size flex justify-between items-center gap-2 bg-white p-2 rounded-lg">
//               <img className="size-6 lg:size-4 xl:size-6" src="/size.png" alt="" />
//               <span>{post.postDetail.size} sqft</span>
//             </div>
//             <div className="size flex justify-between items-center gap-2 bg-white p-2 rounded-lg">
//               <img className="size-6 lg:size-4 xl:size-6" src="/bed.png" alt="" />
//               <span>{post.bedroom} beds</span>
//             </div>
//             <div className="size flex justify-between items-center gap-2 bg-white p-2 rounded-lg">
//               <img className="size-6 lg:size-4 xl:size-6" src="/bath.png" alt="" />
//               <span>{post.bathroom} bathroom</span>
//             </div>
//           </div>

//           {/* Nearby Places */}
//           <p className="title text-[18px] font-bold">Nearby Places</p>
//           <div className="listhorizantle bg-white flex justify-between gap-4 px-5 py-3 rounded-lg">
//             <div className="feature flex gap-2 items-center">
//               <img className="size-6 lg:size-4 xl:size-6" src="/school.png" alt="" />
//               <div className="text">
//                 <h1 className="font-semibold text-md">School</h1>
//                 <p className="text-xs">{post.postDetail.school > 999 ? post.postDetail.school / 1000 + "km" : post.postDetail.school + "m"} away</p>
//               </div>
//             </div>
//             <div className="feature flex gap-2 items-center">
//               <img className="size-6 lg:size-4 xl:size-6" src="/bus.png" alt="" />
//               <div className="text">
//                 <h1 className="font-semibold text-md">Bus Stop</h1>
//                 <p className="text-xs">{post.postDetail.bus}m away</p>
//               </div>
//             </div>
//             <div className="feature flex gap-2 items-center">
//               <img className="size-6 lg:size-4 xl:size-6" src="/utility.png" alt="" />
//               <div className="text">
//                 <h1 className="font-semibold text-md">Restaurant</h1>
//                 <p className="text-xs">{post.postDetail.restaurant}m away</p>
//               </div>
//             </div>
//           </div>

//           {/* Location */}
//           <p className="title text-[18px] font-bold mb-2">Location</p>
//           <div className="mapContain w-full h-48">
//             <Map item={[post]} />
//           </div>

//           {/* Buttons */}
//           <div className="buttons flex justify-between">
//             <button  onClick={handleChat} className="flex items-center p-5 border border-black/50 gap-2">
//               <img className="size-4" src="/chat.png" alt="" />
//               <span >Send a message</span>
//             </button>
//             <button  className={`flex items-center p-5 border border-black/50 gap-2 ${saved ? "bg-yellow-400" : ""}`} onClick={handleSave}>
//               <img className={`size-4 `}  src={"/save.png"} alt="" />
//               <span>{saved ? "Saved" : "Save the Place"}</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SinglePage;
















import React, { useState, useContext } from "react";
import Slider from "../../Components/slider/Slider";
import Map from "../../Components/map/Map";
import { useLoaderData, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";

const SinglePage = () => {
  const post = useLoaderData();
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  
  // State to track if the post is saved
  const [saved, setSaved] = useState(post.isSaved);

  // Handle save functionality
  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login"); // Redirect to login if not logged in
      return;
    }

    // Optimistically update the save status
    setSaved((prev) => !prev);

    try {
      // Make the API request to save the post
      await axios.post("http://localhost:8800/user/save", { postId: post._id },{withCredentials:true});
    } catch (err) {
      console.error("Error saving the post:", err);
      setSaved((prev) => !prev); // Rollback if there's an error
    }
  };

  const handleChat = async () => {
    if (!currentUser) {
      navigate("/login"); // Redirect to login if not logged in
      return;
    }
    if (post.user._id === currentUser._id) {
      return;
    }

    try {
      // Step 1: Check if the chat already exists
      const { data: existingChats } = await axios.get("http://localhost:8800/chats", {
        withCredentials: true, // Include cookies for authentication
      });

      const existingChat = existingChats.find((chat) =>
        chat.userIDs.includes(post.user._id) && chat.userIDs.includes(currentUser._id)
      );

      if (existingChat) {
        // Step 2: Redirect to the existing chat
        navigate(`/profile`);
        return;
      }

      // Step 3: If no existing chat, create a new one
      const response = await axios.post(
        "http://localhost:8800/chats",
        {
          receiverId: post.user._id, // The user who posted this ad
        },
        { withCredentials: true } // Include cookies for authentication
      );

      navigate(`/profile`); // Redirect to the created chat
    } catch (err) {
      console.error("Error handling chat:", err);
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center lg:flex-row container mx-auto w-full px-4">
      {/* Left Side */}
      <div className="details lg:w-3/5 w-full">
        <div className="wrapper lg:pr-12">
          <div className="mb-36 md:mb-0">
            <Slider images={post.images} />
          </div>

          <div className="info mt-10">
            <div className="top flex flex-col lg:flex-row justify-between">
              <div className="post flex flex-col gap-4">
                <h1 className="text-2xl font-normal">{post.title}</h1>
                <div className="address flex items-center gap-1">
                  <img className="size-4" src="/pin.png" alt="" />
                  <span className="text-gray-500">{post.address}</span>
                </div>
                <span className="text-xl bg-yellow-400 px-4 py-2 rounded-lg" style={{ width: "max-content" }}>
                  ${post.price}
                </span>
              </div>
              <div className="user bg-yellow-200 p-4 flex flex-col justify-center items-center gap-4 px-12 rounded-xl mt-4 lg:mt-0">
                <img className="w-14 h-14 rounded-full object-cover" src={post.user.avatar} alt="" />
                <span>{post.user.username}</span>
              </div>
            </div>

            <div className="bottom mt-12 text-gray-500 leading-5 pb-10" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.postDetail.desc) }} />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="features pb-10 w-full rounded-lg lg:rounded-none lg:w-2/5 bg-gray-300">
        <div className="wrapper px-5 py-5 lg:py-0 flex flex-col gap-4">
          {/* Generals */}
          <p className="title text-[18px] font-bold">General</p>
          <div className="listVertical bg-white flex flex-col gap-4 px-5 py-3 rounded-lg">
            <div className="feature flex gap-2 items-center">
              <img className="size-6" src="/utility.png" alt="" />
              <div className="text">
                <h1 className="font-semibold">Utilities</h1>
                {post.postDetail.utilities === "owner" ? <p>Owner is responsible</p> : <p>Tenant is responsible</p>}
              </div>
            </div>
            <div className="feature flex gap-2 items-center">
              <img className="size-6" src="/pet.png" alt="" />
              <div className="text">
                <h1 className="font-semibold">Pet Policy</h1>
                {post.postDetail.pet === "allowed" ? <p>Pets Allowed</p> : <p>Pets not Allowed</p>}
              </div>
            </div>
            <div className="feature flex gap-2 items-center">
              <img className="size-6" src="/fee.png" alt="" />
              <div className="text">
                <h1 className="font-semibold">Property Fees</h1>
                <p>{post.postDetail.income}</p>
              </div>
            </div>
          </div>

          {/* Room Sizes */}
          <p className="title text-[18px] font-bold">Room Sizes</p>
          <div className="listHorizantle flex justify-between flex-wrap">
            <div className="size flex justify-between items-center gap-2 bg-white p-2 rounded-lg">
              <img className="size-6 lg:size-4 xl:size-6" src="/size.png" alt="" />
              <span>{post.postDetail.size} sqft</span>
            </div>
            <div className="size flex justify-between items-center gap-2 bg-white p-2 rounded-lg">
              <img className="size-6 lg:size-4 xl:size-6" src="/bed.png" alt="" />
              <span>{post.bedroom} beds</span>
            </div>
            <div className="size flex justify-between items-center gap-2 bg-white p-2 rounded-lg">
              <img className="size-6 lg:size-4 xl:size-6" src="/bath.png" alt="" />
              <span>{post.bathroom} bathroom</span>
            </div>
          </div>

          {/* Nearby Places */}
          <p className="title text-[18px] font-bold">Nearby Places</p>
          <div className="listhorizantle bg-white flex justify-between gap-4 px-5 py-3 rounded-lg">
            <div className="feature flex gap-2 items-center">
              <img className="size-6 lg:size-4 xl:size-6" src="/school.png" alt="" />
              <div className="text">
                <h1 className="font-semibold text-md">School</h1>
                <p className="text-xs">{post.postDetail.school > 999 ? post.postDetail.school / 1000 + "km" : post.postDetail.school + "m"} away</p>
              </div>
            </div>
            <div className="feature flex gap-2 items-center">
              <img className="size-6 lg:size-4 xl:size-6" src="/bus.png" alt="" />
              <div className="text">
                <h1 className="font-semibold text-md">Bus Stop</h1>
                <p className="text-xs">{post.postDetail.bus}m away</p>
              </div>
            </div>
            <div className="feature flex gap-2 items-center">
              <img className="size-6 lg:size-4 xl:size-6" src="/utility.png" alt="" />
              <div className="text">
                <h1 className="font-semibold text-md">Restaurant</h1>
                <p className="text-xs">{post.postDetail.restaurant}m away</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <p className="title text-[18px] font-bold mb-2">Location</p>
          <div className="mapContain w-full h-48">
            <Map item={[post]} />
          </div>

          {/* Buttons */}
          <div className="buttons flex flex-col lg:flex-row gap-4 items-center mt-4">
            <button onClick={handleSave} className={`btnSave bg-gray-900 text-white w-full lg:w-1/2 p-3 rounded-lg ${saved ? "bg-red-400" : ""}`}>
              {saved ? "Saved" : "Save Post"}
            </button>
            <button onClick={handleChat} className="btnChat bg-blue-500 text-white w-full lg:w-1/2 p-3 rounded-lg">
              Contact Owner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
