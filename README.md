# 🏡 Real Estate Platform – Full Stack MERN Application

A **full-featured real estate platform** built with the **MERN stack (MongoDB, Express, React, Node.js)**.  
Users can list properties, explore them on interactive maps, and communicate in real-time via chat.

---

## 📸 Screenshots

![Home](https://github.com/Shoaib4343/Real-Estate-MERN-Project/blob/main/Screenshot%202026-02-08%20130559.png?raw=true)
![Listing](https://github.com/Shoaib4343/Real-Estate-MERN-Project/blob/main/List.png?raw=true)
![Listing Detail](https://github.com/Shoaib4343/Real-Estate-MERN-Project/blob/main/List%20Detial%20page.png?raw=true)
![Chat](https://github.com/Shoaib4343/Real-Estate-MERN-Project/blob/main/chat.png?raw=true)
![User Profile](https://github.com/Shoaib4343/Real-Estate-MERN-Project/blob/main/userProfile.png?raw=true)

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

---

## ✨ Features

### 🔐 Authentication & Authorization
- User registration & login
- Password hashing with bcrypt
- JWT authentication
- HTTP-only cookies
- Protected routes

### 🏘️ Property Management
- Create, read, update & delete listings
- Multiple image uploads (Cloudinary)
- Advanced filtering
- Save / bookmark properties

### 💬 Real-Time Chat
- Socket.IO based messaging
- One-to-one chat
- Online/offline status
- Unread message indicators

### 🗺️ Interactive Maps
- Leaflet.js integration
- Property markers
- Popup property details

### 👤 User Profile
- Edit profile & avatar
- View owned & saved listings
- Manage chats

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- React Router DOM
- Axios
- Socket.io Client
- Tailwind CSS
- Zustand
- React Leaflet
- React Quill

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
- Cloudinary
- OpenStreetMap

---

## 📁 Project Structure

```bash
Real-Estate-MERN-Project/
│
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   ├── Pages/
│   │   ├── context/
│   │   ├── lib/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── socket/
│   └── app.js
│
└── README.md
