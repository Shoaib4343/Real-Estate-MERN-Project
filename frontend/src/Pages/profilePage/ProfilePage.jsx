import React from 'react'
import List from '../../Components/list/List'
import Chat from '../../Components/chat/Chat'

const ProfilePage = () => {
  return (
    <div className='flex min-h-screen container mx-auto px-4'>
        <div className="details w-3/5 ">
            <div className="wrapper flex flex-col pr-16 gap-5">
                <div className="title flex justify-between items-center">
                    <h1 className='font-light text-3xl'>User Information</h1>
                    <button className="bg-yellow-500 px-4 py-2 m-4">Update Profile</button>
                
                </div>

                {/* user Info */}
                <div className="info flex flex-col gap-5">
                    <span className='flex items-center gap-5'>
                        Avatar:
                        <img className='size-12 rounded-full object-cover' src="https://oue.gatech.edu/sites/default/files/styles/person_image_300x300/public/2022-11/Parker%2C%20Ahmad.jpeg?itok=4dReHV4X" alt="" />
                    </span>
                    <span className='flex items-center gap-5'>Username: <b>Johon Smith</b></span>
                    <span className='flex items-center gap-5'>Email: <b>Johon12@gmail.com</b></span>
                </div>


                <div className="title flex justify-between items-center">
                    <h1 className='font-light text-3xl'>My List </h1>
                    <button className="bg-yellow-500 px-4 py-2 m-4">Create New Post</button>
                </div>

                <List />

                <div className="title flex justify-between items-center">
                    <h1 className='font-light text-3xl'>Save List </h1>
                </div>
                <List />
                
            </div>
        </div>

        {/* rigth side 2/5 chat section */}
        <div className="chatContainer w-2/5 bg-gray-300 mt-0 h-screen" >
            <div className="wrapper px-5  h-screen ">
                <Chat />
            </div>
        </div>
    </div>
  )
}

export default ProfilePage