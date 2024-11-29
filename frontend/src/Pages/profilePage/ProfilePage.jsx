// import React, { useContext, Suspense } from "react";
// import List from "../../Components/list/List";
// import Chat from "../../Components/chat/Chat";
// import {
//   Link,
//   Navigate,
//   useLoaderData,
//   useNavigate,
//   Await,
// } from "react-router-dom";
// import axios from "axios";
// import { userData } from "../../lib/listDummydata";
// import { AuthContext } from "../../../context/AuthContext";

// const ProfilePage = () => {
//   const data = useLoaderData();

//   const navigate = useNavigate();
//   const { updateUser, currentUser } = useContext(AuthContext);

//   // Logout function
//   const handleLogout = async () => {
//     try {
//       // Replace this URL with your actual API endpoint for logout
//       await axios.post(
//         "http://localhost:8800/auth/logout",
//         {},
//         { withCredentials: true }
//       );
//       // Navigate to the login page after successful logout
//       //   console.log(userDAta)
//       updateUser(null);
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout failed:", error.response || error.message);
//     }
//   };
//   // Handle delete logic
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8800/post/${id}`, {
//         withCredentials: true,
//       });
//       console.log(`Post with id ${id} deleted successfully.`);

//       // Update UI
//       setPosts((prev) => prev.filter((post) => post._id !== id));
//     } catch (error) {
//       console.error("Failed to delete post:", error.response || error.message);
//     }
//   };
//   return !currentUser ? (
//     <Navigate to="/login" />
//   ) : (
//     <div className="flex flex-col lg:flex-row min-h-screen container mx-auto px-4">
//       <div className="details w-full lg:w-3/5 ">
//         <div className="wrapper flex flex-col pr-16 gap-5">
//           <div className="title flex justify-between items-center">
//             <h1 className="font-light text-3xl">User Information</h1>
//             <Link to="/profile/update">
//               <button className="bg-yellow-500 px-4 py-2 m-4">
//                 Update Profile
//               </button>
//             </Link>
//           </div>

//           {/* user Info */}
//           <div className="info flex flex-col gap-5">
//             <span className="flex items-center gap-5">
//               Avatar:
//               <img
//                 className="size-12 rounded-full object-cover"
//                 src={currentUser.avatar || "noavatar.jpg"}
//                 alt=""
//               />
//             </span>
//             <span className="flex items-center gap-5">
//               Username: <b>{currentUser.username}</b>
//             </span>
//             <span className="flex items-center gap-5">
//               Email: <b>{currentUser.email}</b>
//             </span>
//             {/* Logout Button */}
//             <button
//               className="bg-red-500 px-4 py-2 text-white mt-2"
//               onClick={handleLogout}
//             >
//               Logout
//             </button>
//           </div>

//           <div className="title flex justify-between items-center">
//             <h1 className="font-light text-3xl">My List </h1>
//             <Link to="/profile/newPost">
//               <button className="bg-yellow-500 px-4 py-2 m-4">
//                 Create New Post
//               </button>
//             </Link>
//           </div>
//           <Suspense fallback={<h1>Loading</h1>}>
//             <Await
//               resolve={data.postRespons}
//               errorElement={<p>Error loading Posts</p>}
//             >
//               {(postRespons) => <List post={postRespons.data.userPosts} deleteHandler={handleDelete} />}
//             </Await>
//           </Suspense>

//           <div className="title flex justify-between items-center">
//             <h1 className="font-light text-3xl">Save List </h1>
//           </div>

//           <Suspense fallback={<h1>Loading</h1>}>
//             <Await
//               resolve={data?.postRespons}
//               errorElement={<p>Error loading Posts</p>}
//             >
//               {(postRespons) => <List post={postRespons.data.savedPosts} />}
//             </Await>
//           </Suspense>
          
//         </div>
//       </div>

//       {/* rigth side 2/5 chat section */}
//       <div className="chatContainer w-full lg:w-2/5 bg-gray-300 mt-0 h-screen">
//         <div className="wrapper px-5  h-screen ">
//         <Suspense fallback={<h1>Loading</h1>}>
//             <Await
//               resolve={data.chatRespons}
//               errorElement={<p>Error loading Chats</p>}
//             >
//               {(chatRespons) => <Chat chats={chatRespons.data}  />}
//             </Await>
//           </Suspense>
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;





// import React, { useContext, Suspense } from "react";
// import List from "../../Components/list/List";
// import Chat from "../../Components/chat/Chat";
// import {
//   Link,
//   Navigate,
//   useLoaderData,
//   useNavigate,
//   Await,
// } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from "../../../context/AuthContext";

// const ProfilePage = () => {
//   const data = useLoaderData();

//   const navigate = useNavigate();
//   const { updateUser, currentUser } = useContext(AuthContext);

//   // Logout function
//   const handleLogout = async () => {
//     try {
//       await axios.post(
//         "http://localhost:8800/auth/logout",
//         {},
//         { withCredentials: true }
//       );
//       updateUser(null);
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout failed:", error.response || error.message);
//     }
//   };

//   // Handle delete logic
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8800/post/${id}`, {
//         withCredentials: true,
//       });
//       console.log(`Post with id ${id} deleted successfully.`);
//       setPosts((prev) => prev.filter((post) => post._id !== id));
//     } catch (error) {
//       console.error("Failed to delete post:", error.response || error.message);
//     }
//   };

//   return !currentUser ? (
//     <Navigate to="/login" />
//   ) : (
//     <div className="flex flex-col lg:flex-row min-h-screen container mx-auto px-4">
//       <div className="details w-full lg:w-3/5">
//         <div className="wrapper flex flex-col pr-16 gap-5">
//           <div className="title flex justify-between items-center">
//             <h1 className="font-light text-3xl">User Information</h1>
//             <Link to="/profile/update">
//               <button className="bg-yellow-500 px-4 py-2 m-4">
//                 Update Profile
//               </button>
//             </Link>
//           </div>

//           {/* User Info */}
//           <div className="info flex flex-col gap-5">
//             <span className="flex items-center gap-5">
//               Avatar:
//               <img
//                 className="size-12 rounded-full object-cover"
//                 src={currentUser.avatar || "noavatar.jpg"}
//                 alt=""
//               />
//             </span>
//             <span className="flex items-center gap-5">
//               Username: <b>{currentUser.username}</b>
//             </span>
//             <span className="flex items-center gap-5">
//               Email: <b>{currentUser.email}</b>
//             </span>
//             <button
//               className="bg-red-500 px-4 py-2 text-white mt-2"
//               onClick={handleLogout}
//             >
//               Logout
//             </button>
//           </div>

//           <div className="title flex justify-between items-center">
//             <h1 className="font-light text-3xl">My List </h1>
//             <Link to="/profile/newPost">
//               <button className="bg-yellow-500 px-4 py-2 m-4">
//                 Create New Post
//               </button>
//             </Link>
//           </div>

//           {/* My List */}
//           <Suspense fallback={<h1>Loading...</h1>}>
//             <Await
//               resolve={data.postRespons}
//               errorElement={<p>Error loading Posts</p>}
//             >
//               {(postRespons) =>
//                 postRespons && postRespons.data?.userPosts?.length > 0 ? (
//                   <List
//                     post={postRespons.data.userPosts}
//                     deleteHandler={handleDelete}
//                   />
//                 ) : (
//                   <p>No posts found.</p>
//                 )
//               }
//             </Await>
//           </Suspense>

//           <div className="title flex justify-between items-center">
//             <h1 className="font-light text-3xl">Save List </h1>
//           </div>

//           {/* Save List */}
//           <Suspense fallback={<h1>Loading...</h1>}>
//             <Await
//               resolve={data?.postRespons}
//               errorElement={<p>Error loading Saved Posts</p>}
//             >
//               {(postRespons) =>
//                 postRespons && postRespons.data?.savedPosts?.length > 0 ? (
//                   <List post={postRespons.data.savedPosts} />
//                 ) : (
//                   <p>No saved posts found.</p>
//                 )
//               }
//             </Await>
//           </Suspense>
//         </div>
//       </div>

//       {/* Right Side Chat Section */}
//       <div className="chatContainer w-full lg:w-2/5 bg-gray-300 mt-0 h-screen">
//         <div className="wrapper px-5  h-screen">
//           <Suspense fallback={<h1>Loading Chats...</h1>}>
//             <Await
//               resolve={data.chatRespons}
//               errorElement={<p>Error loading Chats</p>}
//             >
//               {(chatRespons) => <Chat chats={chatRespons.data} />}
//             </Await>
//           </Suspense>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;




// import React, { useContext, Suspense, useState } from "react";
// import List from "../../Components/list/List";
// import Chat from "../../Components/chat/Chat";
// import { Link, Navigate, useLoaderData, useNavigate, Await } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from "../../../context/AuthContext";

// const ProfilePage = () => {
//   const data = useLoaderData();
//   const navigate = useNavigate();
//   const { updateUser, currentUser } = useContext(AuthContext);

//   // State to manage the modal visibility and the post ID to be deleted
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [postToDelete, setPostToDelete] = useState(null);

//   // Logout function
//   const handleLogout = async () => {
//     try {
//       await axios.post(
//         "http://localhost:8800/auth/logout",
//         {},
//         { withCredentials: true }
//       );
//       updateUser(null);
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout failed:", error.response || error.message);
//     }
//   };

//   // Handle delete logic
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8800/post/${id}`, {
//         withCredentials: true,
//       });
//       console.log(`Post with id ${id} deleted successfully.`);
//       setIsModalOpen(false); // Close the modal after deleting
//       setPostToDelete(null); // Reset the post to delete
//       window.location.reload(); // Reload the page to reflect changes
//     } catch (error) {
//       console.error("Failed to delete post:", error.response || error.message);
//     }
//   };

//   // Show delete confirmation modal
//   const showDeleteModal = (id) => {
//     setPostToDelete(id); // Set the post to be deleted
//     setIsModalOpen(true); // Open the modal
//   };

//   // Close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setPostToDelete(null);
//   };

//   return !currentUser ? (
//     <Navigate to="/login" />
//   ) : (
//     <div className="flex flex-col lg:flex-row min-h-screen container mx-auto px-4">
//       <div className="details w-full lg:w-3/5">
//         <div className="wrapper flex flex-col pr-16 gap-5">
//           <div className="title flex justify-between items-center">
//             <h1 className="font-light text-3xl">User Information</h1>
//             <Link to="/profile/update">
//               <button className="bg-yellow-500 px-4 py-2 m-4">
//                 Update Profile
//               </button>
//             </Link>
//           </div>

//           {/* User Info */}
//           <div className="info flex flex-col gap-5">
//             <span className="flex items-center gap-5">
//               Avatar:
//               <img
//                 className="size-12 rounded-full object-cover"
//                 src={currentUser.avatar || "noavatar.jpg"}
//                 alt=""
//               />
//             </span>
//             <span className="flex items-center gap-5">
//               Username: <b>{currentUser.username}</b>
//             </span>
//             <span className="flex items-center gap-5">
//               Email: <b>{currentUser.email}</b>
//             </span>
//             <button
//               className="bg-red-500 px-4 py-2 text-white mt-2"
//               onClick={handleLogout}
//             >
//               Logout
//             </button>
//           </div>

//           <div className="title flex justify-between items-center">
//             <h1 className="font-light text-3xl">My List </h1>
//             <Link to="/profile/newPost">
//               <button className="bg-yellow-500 px-4 py-2 m-4">
//                 Create New Post
//               </button>
//             </Link>
//           </div>

//           {/* My List */}
//           <Suspense fallback={<h1>Loading...</h1>}>
//             <Await
//               resolve={data.postRespons}
//               errorElement={<p>Error loading Posts</p>}
//             >
//               {(postRespons) =>
//                 postRespons && postRespons.data?.userPosts?.length > 0 ? (
//                   <List
//                     post={postRespons.data.userPosts}
//                     deleteHandler={showDeleteModal} // Pass the showDeleteModal function
//                   />
//                 ) : (
//                   <p>No posts found.</p>
//                 )
//               }
//             </Await>
//           </Suspense>

//           <div className="title flex justify-between items-center">
//             <h1 className="font-light text-3xl">Save List </h1>
//           </div>

//           {/* Save List */}
//           <Suspense fallback={<h1>Loading...</h1>}>
//             <Await
//               resolve={data?.postRespons}
//               errorElement={<p>Error loading Saved Posts</p>}
//             >
//               {(postRespons) =>
//                 postRespons && postRespons.data?.savedPosts?.length > 0 ? (
//                   <List post={postRespons.data.savedPosts} />
//                 ) : (
//                   <p>No saved posts found.</p>
//                 )
//               }
//             </Await>
//           </Suspense>
//         </div>
//       </div>

//       {/* Right Side Chat Section */}
//       <div className="chatContainer w-full lg:w-2/5 bg-gray-300 mt-0 h-screen">
//         <div className="wrapper px-5  h-screen">
//           <Suspense fallback={<h1>Loading Chats...</h1>}>
//             <Await
//               resolve={data.chatRespons}
//               errorElement={<p>Error loading Chats</p>}
//             >
//               {(chatRespons) => <Chat chats={chatRespons.data} />}
//             </Await>
//           </Suspense>
//         </div>
//       </div>

//       {/* Delete Confirmation Modal */}
//       {isModalOpen && (
//         <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="modalContent bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl">Are you sure you want to delete this post?</h2>
//             <div className="flex gap-4 mt-4">
//               <button
//                 onClick={() => handleDelete(postToDelete)}
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//               >
//                 Yes
//               </button>
//               <button
//                 onClick={closeModal}
//                 className="bg-gray-500 text-white px-4 py-2 rounded"
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfilePage;


import React, { useContext, Suspense, useState } from "react";
import List from "../../Components/list/List";
import Chat from "../../Components/chat/Chat";
import { Link, Navigate, useLoaderData, useNavigate, Await } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";

const ProfilePage = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const { updateUser, currentUser } = useContext(AuthContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8800/auth/logout",
        {},
        { withCredentials: true }
      );
      updateUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.response || error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/post/${id}`, {
        withCredentials: true,
      });
      console.log(`Post with id ${id} deleted successfully.`);
      setIsModalOpen(false);
      setPostToDelete(null);
      window.location.reload();
    } catch (error) {
      console.error("Failed to delete post:", error.response || error.message);
    }
  };

  const showDeleteModal = (id) => {
    setPostToDelete(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPostToDelete(null);
  };

  return !currentUser ? (
    <Navigate to="/login" />
  ) : (
    <div className="flex flex-col lg:flex-row min-h-screen container mx-auto px-4">
      <div className="details w-full lg:w-3/5">
        <div className="wrapper flex flex-col pr-0 lg:pr-16 gap-5">
          <div className="title flex justify-between items-center">
            <h1 className="font-light text-2xl lg:text-3xl">User Information</h1>
            <Link to="/profile/update">
              <button className="bg-yellow-500 text-sm lg:text-base px-3 lg:px-4 py-2 m-2 lg:m-4 rounded">
                Update Profile
              </button>
            </Link>
          </div>

          {/* User Info */}
          <div className="info flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <span className="font-medium">Avatar:</span>
              <img
                className="w-16 h-16  rounded-full object-cover"
                src={currentUser.avatar || "noavatar.jpg"}
                alt=""
              />
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-5">
              <span className="font-medium">Username:</span>
              <b>{currentUser.username}</b>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-5">
              <span className="font-medium">Email:</span>
              <b className="break-words">{currentUser.email}</b>
            </div>
            <button
              className="bg-red-500 text-white text-sm lg:text-base px-3 lg:px-4 py-2 rounded mt-2 w-fit"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>

          <div className="title flex justify-between items-center">
            <h1 className="font-light text-2xl lg:text-3xl">My List</h1>
            <Link to="/profile/newPost">
              <button className="bg-yellow-500 text-sm lg:text-base px-3 lg:px-4 py-2 m-2 lg:m-4 rounded">
                Create New Post
              </button>
            </Link>
          </div>

          {/* My List */}
          <Suspense fallback={<h1>Loading...</h1>}>
            <Await
              resolve={data.postRespons}
              errorElement={<p>Error loading Posts</p>}
            >
              {(postRespons) =>
                postRespons && postRespons.data?.userPosts?.length > 0 ? (
                  <List
                    post={postRespons.data.userPosts}
                    deleteHandler={showDeleteModal}
                  />
                ) : (
                  <p>No posts found.</p>
                )
              }
            </Await>
          </Suspense>

          <div className="title flex justify-between items-center">
            <h1 className="font-light text-2xl lg:text-3xl">Save List</h1>
          </div>

          {/* Save List */}
          <Suspense fallback={<h1>Loading...</h1>}>
            <Await
              resolve={data?.postRespons}
              errorElement={<p>Error loading Saved Posts</p>}
            >
              {(postRespons) =>
                postRespons && postRespons.data?.savedPosts?.length > 0 ? (
                  <List post={postRespons.data.savedPosts} />
                ) : (
                  <p>No saved posts found.</p>
                )
              }
            </Await>
          </Suspense>
        </div>
      </div>

      {/* Right Side Chat Section */}
      <div className="chatContainer w-full lg:w-2/5 bg-gray-300 mt-6 lg:mt-0 h-auto lg:h-screen">
        <div className="wrapper px-5">
          <Suspense fallback={<h1>Loading Chats...</h1>}>
            <Await
              resolve={data.chatRespons}
              errorElement={<p>Error loading Chats</p>}
            >
              {(chatRespons) => <Chat chats={chatRespons.data} />}
            </Await>
          </Suspense>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {isModalOpen && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modalContent bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl">Are you sure you want to delete this post?</h2>
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => handleDelete(postToDelete)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Yes
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
