import React, { useContext } from 'react'
import List from '../../Components/list/List'
import Chat from '../../Components/chat/Chat'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userData } from '../../lib/listDummydata';
import { AuthContext } from '../../../context/AuthContext';

const ProfilePage = () => {
    const navigate = useNavigate();
    const {updateUser,currentUser} = useContext(AuthContext)

  // Logout function
  const handleLogout = async () => {
    try {
      // Replace this URL with your actual API endpoint for logout
      await axios.post('http://localhost:8800/auth/logout', {}, { withCredentials: true });
      // Navigate to the login page after successful logout
    //   console.log(userDAta)
     updateUser(null)
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error.response || error.message);
    }
  };
  return (
    !currentUser ? <Navigate to='/login'/> : (
    <div className='flex flex-col lg:flex-row min-h-screen container mx-auto px-4'>
        <div className="details w-full lg:w-3/5 ">
            <div className="wrapper flex flex-col pr-16 gap-5">
                <div className="title flex justify-between items-center">
                    <h1 className='font-light text-3xl'>User Information</h1>
                   <Link to="/profile/update">
                    <button className="bg-yellow-500 px-4 py-2 m-4">Update Profile</button>
                   </Link>
                
                </div>

                {/* user Info */}
                <div className="info flex flex-col gap-5">
                    <span className='flex items-center gap-5'>
                        Avatar:
                        <img className='size-12 rounded-full object-cover' src={currentUser.avatar || 'noavatar.jpg'} alt="" />
                    </span>
                    <span className='flex items-center gap-5'>Username: <b>{currentUser.username}</b></span>
                    <span className='flex items-center gap-5'>Email: <b>{currentUser.email}</b></span>
                     {/* Logout Button */}
                     <button 
                        className="bg-red-500 px-4 py-2 text-white mt-2"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>


                <div className="title flex justify-between items-center">
                    <h1 className='font-light text-3xl'>My List </h1>
                    <Link to="/profile/newPost">
                    <button className="bg-yellow-500 px-4 py-2 m-4">Create New Post</button>
                    </Link>
                </div>

                <List />

                <div className="title flex justify-between items-center">
                    <h1 className='font-light text-3xl'>Save List </h1>
                </div>
                <List />
                
            </div>
        </div>

        {/* rigth side 2/5 chat section */}
        <div className="chatContainer w-full lg:w-2/5 bg-gray-300 mt-0 h-screen" >
            <div className="wrapper px-5  h-screen ">
                <Chat />
            </div>
        </div>
    </div>
  )
)
}

export default ProfilePage