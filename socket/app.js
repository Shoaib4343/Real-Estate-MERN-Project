import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:5173",
  },
});

let onlineUser = [];


// const addUser = (userId, socketId) => {
//   const userExits = onlineUser.find((user) => user.userId === userId);
//   if (!userExits) {
//     onlineUser.push({ userId, socketId });
//   }
// };
const addUser = (userId, socketId) => {
    const userExits = onlineUser.find((user) => user.userId === userId);
    if (!userExits) {
      onlineUser.push({ userId, socketId });
      console.log("User added:", onlineUser); // Log the current online users
    }
  };

  

const getUser = (userId) => {
  return onlineUser.find((user) => user.userId === userId);
};

const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
};


io.on("connection", (socket) => {
  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);
    console.log("online user : ",onlineUser)
  });

//   socket.on("sendMessage", ({ receiverId, data }) => {
//     const receiver = getUser(receiverId);
//     io.to(receiver.socketId).emit("getMessage", data);
   
//   });


// socket.on("sendMessage", ({ receiverId, data }) => {
//     const receiver = getUser(receiverId);
//     if (!receiver) {
//       console.error(`Receiver with ID ${receiverId} not found.`);
//       return; // Prevent further execution if receiver is not found
//     }
//     io.to(receiver.socketId).emit("getMessage", data);
//   });
socket.on("sendMessage", ({ receiverId, data }) => {
  const receiver = getUser(receiverId);
  if (!receiver) {
    console.error(`Receiver with ID ${receiverId} not found.`);
    return;
  }
  console.log(`Sending message to receiver ${receiverId} at socket ${receiver.socketId}`);
  io.to(receiver.socketId).emit("getMessage", data);
});

  
  

  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});

io.listen("4000");
