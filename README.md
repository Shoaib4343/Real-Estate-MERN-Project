# 🏡 Real Estate Platform – Full Stack MERN Application

A **full-featured real estate platform** built with the **MERN stack (MongoDB, Express, React, Node.js)**.  
This application enables users to list properties, explore them on interactive maps, and communicate in real-time via chat.

---

## 📸 Screenshots

<!-- Add screenshots here -->
![Home](https://github.com/Shoaib4343/Real-Estate-MERN-Project/blob/main/Screenshot%202026-02-08%20130559.png?raw=true)
<!-- ![Listing](screenshots/listing.png) -->
<!-- ![Chat](screenshots/chat.png) -->
<!-- ![Map](screenshots/map.png) -->

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

