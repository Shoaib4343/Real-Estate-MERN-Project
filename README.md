# 🏡 Real Estate Platform – Full Stack MERN Application

A **full-featured real estate platform** built with the **MERN stack (MongoDB, Express, React, Node.js)**.  
This application enables users to list properties, explore them on interactive maps, and communicate in real-time via chat.

---

## 📸 Screenshots

<!-- Add screenshots here -->
![Home](https://github.com/Shoaib4343/Real-Estate-MERN-Project/blob/main/Screenshot%202026-02-08%20130559.png?raw=true)
![Listing](https://github.com/Shoaib4343/Real-Estate-MERN-Project/blob/main/List.png?raw=true) 
![ListingDetail](https://github.com/Shoaib4343/Real-Estate-MERN-Project/blob/main/List%20Detial%20page.png?raw=true) 
[Chat]([screenshots/chat.png](https://github.com/Shoaib4343/Real-Estate-MERN-Project/blob/main/chat.png?raw=true)) 
![User](https://github.com/Shoaib4343/Real-Estate-MERN-Project/blob/main/userProfile.png?raw=true)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Running the Application](#-running-the-application)
- [API Documentation](#-api-documentation)
- [Socket Events](#-socket-events)
- [Database Schema](#-database-schema)
- [Security Best Practices](#-security-best-practices)
- [Deployment](#-deployment)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🔐 Authentication & Authorization
- User registration & login
- Password hashing with **bcrypt**
- JWT-based authentication
- HTTP-only cookies
- Protected routes & middleware

### 🏘️ Property Management
- Create, read, update & delete property listings
- Upload multiple images using **Cloudinary**
- Rich text editor for descriptions
- Advanced filtering:
  - City
  - Buy / Rent
  - Property type (Apartment, House, Condo, Land)
  - Price range
  - Bedrooms
- Save / bookmark favorite properties

### 💬 Real-Time Chat
- WebSocket-based instant messaging
- One-on-one chat between buyers & owners
- Online/offline status tracking
- Unread message indicators
- Persistent chat history

### 🗺️ Interactive Maps
- **Leaflet.js** integration
- Property location markers
- Popup details on markers
- Responsive map view

### 👤 User Profile
- View & edit profile
- Avatar upload via Cloudinary
- View owned properties
- View saved properties
- Manage active chats

### 📱 Responsive Design
- Mobile-first approach
- Tailwind CSS styling
- Fully responsive layouts

---

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- React Router DOM
- Axios
- Socket.io Client
- Tailwind CSS
- Zustand
- React Leaflet
- React Quill
- DOMPurify
- Timeago.js

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.io
- JWT
- Bcrypt
- Cookie Parser
- CORS
- Dotenv

### External Services
- Cloudinary (Image uploads)
- OpenStreetMap (Maps)

---

## 📁 Project Structure
Real-Estate-MERN-Project/
│
├── frontend/
│ ├── src/
│ │ ├── Components/
│ │ ├── Pages/
│ │ ├── context/
│ │ ├── lib/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── vite.config.js
│
├── server/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
│
├── socket/
│ └── app.js
│
└── README.md



---

## ✅ Prerequisites

- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn
- Git

**Optional**
- MongoDB Compass
- Postman

---

## 🚀 Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Shoaib4343/Real-Estate-MERN-Project.git
cd Real-Estate-MERN-Project



2️⃣ Install Dependencies

Frontend

cd frontend
npm install


Backend

cd ../server
npm install


Socket Server

cd ../socket
npm install

🔐 Environment Variables
Backend (server/.env)
DATABASE_URL=mongodb://127.0.0.1:27017/fypRealEstate
JWT_SECRET_KEY=your_secret_key_here
CLIENT_URL=http://localhost:5173
PORT=8800

Frontend (frontend/.env)
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset

🏃 Running the Application

You need to run four services:

MongoDB
mongod

Backend Server
cd server
npm start


Runs on http://localhost:8800

Socket Server
cd socket
npm start


Runs on http://localhost:4000

Frontend
cd frontend
npm run dev


Runs on http://localhost:5173

📡 API Documentation
Authentication

POST /auth/register

POST /auth/login

POST /auth/logout

Posts

GET /post

GET /post/:id

POST /post

DELETE /post/:id

Chats

GET /chats

POST /chats

GET /chats/:id

PUT /chats/read/:id

Messages

POST /messages/:chatId

🔌 Socket Events
Client → Server
socket.emit("newUser", userId);
socket.emit("sendMessage", { receiverId, data });

Server → Client
socket.on("getMessage", (data) => {
  // handle incoming message
});

💾 Database Schema

User

Post

PostDetail

Chat

Message

SavedPost

All schemas are implemented using Mongoose with proper references.

🔒 Security Best Practices

HTTP-only cookies

Password hashing with bcrypt

JWT authentication

Input validation & sanitization

CORS configuration

Environment variable protection

