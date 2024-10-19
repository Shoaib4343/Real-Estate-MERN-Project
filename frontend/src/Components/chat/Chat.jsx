import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Chat = () => {
  const [chat, setChat] = useState(true)
  return (
    <div className="h-screen flex flex-col ">
      <h1 className="text-3xl mb-2">Messages</h1>
      <div className="messages flex flex-col  bg-reen-400 h-1/3 overflow-y-auto">
        <div className="message flex  items-center my-2 p-2 gap-5 rounded-lg bg-white">
          <img
            src="https://oue.gatech.edu/sites/default/files/styles/person_image_300x300/public/2022-11/Parker%2C%20Ahmad.jpeg?itok=4dReHV4X"
            alt="John Smith"
            className="w-12 h-12 rounded-full"
          />

          <span className="font-bold">John Smith</span>
          <p>Lorem ipsum dolor, sit....</p>
        </div>
        <div className="message flex  items-center my-2 p-2 gap-5 rounded-lg bg-white">
          <img
            src="https://oue.gatech.edu/sites/default/files/styles/person_image_300x300/public/2022-11/Parker%2C%20Ahmad.jpeg?itok=4dReHV4X"
            alt="John Smith"
            className="w-12 h-12 rounded-full"
          />

          <span className="font-bold">John Smith</span>
          <p>Lorem ipsum dolor, sit....</p>
        </div>
        <div className="message flex  items-center my-2 p-2 gap-5 rounded-lg bg-white">
          <img
            src="https://oue.gatech.edu/sites/default/files/styles/person_image_300x300/public/2022-11/Parker%2C%20Ahmad.jpeg?itok=4dReHV4X"
            alt="John Smith"
            className="w-12 h-12 rounded-full"
          />

          <span className="font-bold">John Smith</span>
          <p>Lorem ipsum dolor, sit....</p>
        </div>
        <div className="message flex  items-center my-2 p-2 gap-5 rounded-lg bg-white">
          <img
            src="https://oue.gatech.edu/sites/default/files/styles/person_image_300x300/public/2022-11/Parker%2C%20Ahmad.jpeg?itok=4dReHV4X"
            alt="John Smith"
            className="w-12 h-12 rounded-full"
          />

          <span className="font-bold">John Smith</span>
          <p>Lorem ipsum dolor, sit....</p>
        </div>
        <div className="message flex  items-center my-2 p-2 gap-5 rounded-lg bg-white">
          <img
            src="https://oue.gatech.edu/sites/default/files/styles/person_image_300x300/public/2022-11/Parker%2C%20Ahmad.jpeg?itok=4dReHV4X"
            alt="John Smith"
            className="w-12 h-12 rounded-full"
          />

          <span className="font-bold">John Smith</span>
          <p>Lorem ipsum dolor, sit....</p>
        </div>
        <div className="message flex  items-center my-2 p-2 gap-6 rounded-lg bg-white">
          <img
            src="https://oue.gatech.edu/sites/default/files/styles/person_image_300x300/public/2022-11/Parker%2C%20Ahmad.jpeg?itok=4dReHV4X"
            alt="John Smith"
            className="w-12 h-12 rounded-full"
          />

          <span className="font-bold">John Smith</span>
          <p>Lorem ipsum dolor, sit....</p>
        </div>
        <div className="message flex  items-center my-2 p-2 gap-6 rounded-lg bg-white">
          <img
            src="https://oue.gatech.edu/sites/default/files/styles/person_image_300x300/public/2022-11/Parker%2C%20Ahmad.jpeg?itok=4dReHV4X"
            alt="John Smith"
            className="w-12 h-12 rounded-full"
          />

          <span className="font-bold">John Smith</span>
          <p>Lorem ipsum dolor, sit....</p>
        </div>
      </div>


      {/* chat Box bottom */}
      {chat && (<div className="chatBox b-red-500 h-2/3 flex flex-col bg-white mb-2 ">
        <div className="top flex justify-between items-center p-2 bg-yellow-200">
            <div className="user flex gap-5 items-center">
                <img className="size-12 rounded-full object-cover" src="https://oue.gatech.edu/sites/default/files/styles/person_image_300x300/public/2022-11/Parker%2C%20Ahmad.jpeg?itok=4dReHV4X" alt="" />
                <span className="font-semibold">John Smith</span>
            </div>
            <span className="cursor-pointer" onClick={()=>setChat(false)}><RxCross1 /></span>
        </div>
        {/* center where to show chat msg*/}
        <div className="center h-[300px] overflow-y-scroll flex flex-col p-4 gap-5">
            <div className="chatMessage w-1/2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <span className="bg-gray-200 p-1 text-sm rounded-md">2hr ago</span>
            </div>
            <div className="chatMessage w-1/2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <span className="bg-gray-200 p-1 text-sm rounded-md">2hr ago</span>
            </div>
            <div className="chatMessage w-1/2 own text-right self-end">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <span className="bg-gray-200 p-1 text-sm rounded-md">2hr ago</span>
            </div>
            <div className="chatMessage w-1/2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <span className="bg-gray-200 p-1 text-sm rounded-md">2hr ago</span>
            </div>
            <div className="chatMessage w-1/2 own text-right self-end">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <span className="bg-gray-200 p-1 text-sm rounded-md">2hr ago</span>
            </div>
            <div className="chatMessage w-1/2 own text-right self-end">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <span className="bg-gray-200 p-1 text-sm rounded-md">2hr ago</span>
            </div>
            <div className="chatMessage w-1/2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <span className="bg-gray-200 p-1 text-sm rounded-md">2hr ago</span>
            </div>
            <div className="chatMessage w-1/2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <span className="bg-gray-200 p-1 text-sm rounded-md">2hr ago</span>
            </div>
            <div className="chatMessage w-1/2 own text-right self-end">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <span className="bg-gray-200 p-1 text-sm rounded-md">2hr ago</span>
            </div>
        </div>

        {/* bottom chat botton and text area */}
        <div className="bottom border-t-yellow-200  border-t-2 h-14 flex justify-between items-center ">
            <textarea name="" id="" className="flex-[3] h-full border-none p-5 outline-1"></textarea>
            <button className="flex-1 bg-yellow-200 h-full cursor-pointer border-none resize-none">Send</button>
        </div>
      </div>)}
    </div>
  );
};

export default Chat;
