import React from "react";
import { RxCross1 } from "react-icons/rx";

const Chat = () => {
  return (
    <div className="h-screen flex flex-col">
      <h1 className="text-3xl mb-2">Messages</h1>
      <div className="messages flex flex-col  bg-reen-400 h-1/2 overflow-y-auto">
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
      <div className="chatBox b-red-500 h-1/2 flex flex-col bg-white">
        <div className="top flex justify-between items-center p-2 bg-yellow-200">
            <div className="user flex gap-5 items-center">
                <img className="size-12 rounded-full object-cover" src="https://oue.gatech.edu/sites/default/files/styles/person_image_300x300/public/2022-11/Parker%2C%20Ahmad.jpeg?itok=4dReHV4X" alt="" />
                <span className="font-semibold">John Smith</span>
            </div>
            <span className="cursor-pointer"><RxCross1 /></span>
        </div>
        <div className="center">
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <span>2hr ago</span>
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <span>2hr ago</span>
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <span>2hr ago</span>
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <span>2hr ago</span>
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <span>2hr ago</span>
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <span>2hr ago</span>
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <span>2hr ago</span>
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <span>2hr ago</span>
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <span>2hr ago</span>
            </div>
        </div>
        <div className="bottom">
            <textarea name="" id=""></textarea>
            <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
