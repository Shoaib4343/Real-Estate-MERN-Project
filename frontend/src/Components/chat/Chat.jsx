

import axios from "axios";
import React, { useState, useEffect, useContext, useRef } from "react";
import { RxCross1 } from "react-icons/rx";
import { format } from "timeago.js";
import { AuthContext } from "../../../context/AuthContext";
import { SocketContext } from "../../../context/SocketContext";
import { useNotificationStore } from "../../lib/notificationStore"; // Assuming this is for managing notifications

const Chat = ({ chats }) => {
  const [activeChat, setActiveChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const messageEndRef = useRef();
  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  const [chatList, setChatList] = useState(chats || []);
  const decrease = useNotificationStore((state) => state.decrease); // To decrease notification count on chat open

  // Handle opening the chat
  const handleOpenChat = async (chatId, receiver) => {
    try {
      const res = await axios.get(`http://localhost:8800/chats/${chatId}`, {
        withCredentials: true,
      });

      console.log(res.data);
      // Check if the chat has been seen by the current user
      if (!res.data.seenBy.includes(currentUser.id)) {
        decrease(); // Decrease notification count
      }

      // Set the active chat
      setActiveChat({
        id: chatId,
        receiver,
        messages: res.data.messages || [],
      });

      // Mark chat as read
      await axios.put(
        `http://localhost:8800/chats/read/${chatId}`,
        {},
        { withCredentials: true }
      );

      // Update chat list state to reflect the read status
      setChatList((prev) =>
        prev.map((chat) =>
          chat._id === chatId
            ? { ...chat, seenBy: [...chat.seenBy, currentUser.id] } // Add current user to seenBy
            : chat
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  // Handle closing the chat
  const handleCloseChat = () => {
    setActiveChat(null);
  };

  // Handle sending a message
  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      const res = await axios.post(
        `http://localhost:8800/messages/${activeChat.id}`,
        { text: newMessage },
        { withCredentials: true }
      );

      setActiveChat((prev) => ({
        ...prev,
        messages: [...prev.messages, res.data],
      }));

      setChatList((prev) =>
        prev.map((chat) =>
          chat._id === activeChat.id
            ? { ...chat, lastMessage: res.data.text }
            : chat
        )
      );

      setNewMessage("");
      socket.emit("sendMessage", {
        receiverId: activeChat.receiver._id,
        data: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeChat?.messages]);

  // Handle real-time updates
  useEffect(() => {
    if (!activeChat || !socket) return;

    const handleNewMessage = (data) => {
      if (activeChat.id === data.chatId) {
        setActiveChat((prev) => ({
          ...prev,
          messages: [...prev.messages, data],
        }));

        setChatList((prev) =>
          prev.map((chat) =>
            chat._id === data.chatId
              ? { ...chat, lastMessage: data.text }
              : chat
          )
        );
      }
    };

    socket.on("getMessage", handleNewMessage);

    return () => {
      socket.off("getMessage", handleNewMessage);
    };
  }, [socket, activeChat]);

  // Handle deleting a chat
  const handleDeleteChat = async (chatId) => {
    try {
      await axios.delete(`http://localhost:8800/chats/${chatId}`, {
        withCredentials: true,
      });

      // Remove the chat from the local state
      setChatList((prev) => prev.filter((chat) => chat._id !== chatId));

      // Close the active chat if it's the one being deleted
      if (activeChat && activeChat.id === chatId) {
        setActiveChat(null);
      }
    } catch (err) {
      console.log("Error deleting chat:", err);
    }
  };

  return (
    <div className="h-screen flex flex-col p-4 bg-gray-100">
      <h1 className="text-3xl mb-4 font-semibold text-gray-800">Messages</h1>

      {/* Chat List */}
      {/* Chat List */}
<div className="messages flex flex-col bg-white shadow-lg rounded-lg p-4 h-1/3 overflow-y-auto">
  {chatList.map((c) => (
    <div
      key={c._id}
      className={`message flex items-center my-2 p-3 gap-5 rounded-lg cursor-pointer ${
        c.seenBy.includes(currentUser.id) || activeChat?.id === c._id
          ? "bg-gray-100"
          : "bg-yellow-100"
      }`}
      onClick={() => handleOpenChat(c._id, c.receiver)}
    >
      <img
        src={c.receiver?.avatar || "/noavatar.jpg"}
        alt={c.receiver?.username || "No Avatar"}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <span className="font-bold text-gray-700">
          {c.receiver?.username || "Unknown User"}
        </span>
        <p className="text-sm text-gray-500 truncate">
          {c.lastMessage || "No message available"}
        </p>
      </div>
      <button
        className="ml-auto text-red-500 hover:text-red-700"
        onClick={(e) => {
          e.stopPropagation(); // Prevent the click from opening the chat
          handleDeleteChat(c._id); // Call the delete function
        }}
      >
        Delete
      </button>
    </div>
  ))}
</div>


      {/* Chat Box */}
      {activeChat && (
        <div className="chatBox h-2/3 flex flex-col bg-white shadow-lg rounded-lg mt-4">
          {/* Chat Header */}
          <div className="top flex justify-between items-center p-4 bg-gray-200 rounded-t-lg">
            <div className="user flex gap-3 items-center">
              <img
                src={activeChat.receiver.avatar || "/noavatar.jpg"}
                alt={activeChat.receiver.username || "No Avatar"}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-semibold text-gray-700">
                {activeChat.receiver.username || "Unknown User"}
              </span>
            </div>
            <span
              className="cursor-pointer text-gray-500 hover:text-gray-800"
              onClick={handleCloseChat}
            >
              <RxCross1 size={20} />
            </span>
          </div>

          {/* Chat Messages */}
          <div className="center flex-1 overflow-y-auto p-4 space-y-4 bg-gray-100 rounded-lg shadow-md">
            {activeChat.messages.map((msg, index) => (
              <div
                key={index}
                className={`chatMessage max-w-[80%] p-3 rounded-lg ${
                  msg.userId === currentUser._id
                    ? "ml-auto bg-blue-200 text-right text-gray-800" // Sender's message (Light Blue)
                    : "mr-auto bg-gray-200 text-left text-gray-800" // Receiver's message (Light Gray)
                } shadow-sm`}
              >
                <p className="text-sm font-medium">{msg.text}</p>
                <span className="block text-xs text-gray-400 mt-1">
                  {msg.createdAt ? format(new Date(msg.createdAt)) : "Just now"}
                </span>
              </div>
            ))}
            <div ref={messageEndRef}></div> {/* Scroll to the bottom */}
          </div>

          {/* Message Input */}
          <div className="bottom flex items-center p-4 bg-gray-200 rounded-b-lg">
            <textarea
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              onClick={handleSendMessage}
              className="ml-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
