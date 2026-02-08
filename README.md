# 🏡 Real Estate Platform - Full Stack MERN Application

A comprehensive real estate platform built with the MERN stack (MongoDB, Express, React, Node.js) featuring real-time chat functionality, interactive maps, and advanced property management.

![Home](https://github.com/Shoaib4343/Real-Estate-MERN-Project/blob/main/Screenshot%202026-02-08%20130559.png?raw=true)

## 📸 Screenshots

<details>
<summary>View More Screenshots</summary>

### Property Listings
![Listing](https://github.com/Shoaib4343/Real-Estate-MERN-Project/blob/main/List.png?raw=true)

### Property Details
![Listing Detail](https://github.com/Shoaib4343/Real-Estate-MERN-Project/blob/main/List%20Detial%20page.png?raw=true)

### Real-Time Chat
![Chat](https://github.com/Shoaib4343/Real-Estate-MERN-Project/blob/main/chat.png?raw=true)

### User Profile
![User Profile](https://github.com/Shoaib4343/Real-Estate-MERN-Project/blob/main/userProfile.png?raw=true)

</details>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Running the Application](#️-running-the-application)
- [API Documentation](#-api-documentation)
- [Socket Events](#-socket-events)
- [Database Schema](#-database-schema)
- [Troubleshooting](#-troubleshooting)
- [Security Best Practices](#-security-best-practices)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🔐 Authentication & Authorization
- ✅ User registration with password hashing (bcrypt)
- ✅ JWT-based authentication
- ✅ Persistent login with HTTP-only cookies
- ✅ Protected routes and middleware

### 🏘️ Property Management
- ✅ Create, read, update, delete property listings
- ✅ Upload multiple images via Cloudinary
- ✅ Rich text editor for property descriptions
- ✅ Advanced filtering system:
  - City
  - Type (Buy/Rent)
  - Property type (Apartment/House/Condo/Land)
  - Price range
  - Number of bedrooms
- ✅ Save/bookmark favorite properties

### 💬 Real-Time Chat
- ✅ WebSocket-based instant messaging
- ✅ One-on-one chat between property owners and buyers
- ✅ Real-time notification system
- ✅ Message history persistence
- ✅ Online/offline status tracking
- ✅ Unread message indicators

### 🗺️ Interactive Maps
- ✅ Leaflet.js integration
- ✅ Property location markers
- ✅ Popup information on markers
- ✅ Responsive map view

### 👤 User Profile
- ✅ View and edit profile information
- ✅ Update avatar via Cloudinary
- ✅ View owned properties
- ✅ View saved properties
- ✅ Manage active chats

### 📱 Responsive Design
- ✅ Mobile-first approach
- ✅ Tailwind CSS for styling
- ✅ Adaptive layouts for all screen sizes

---

## 🛠️ Tech Stack

### Frontend
- **React** 18.3.1 - UI library
- **Vite** - Build tool
- **React Router DOM** 6.4 - Routing with data loaders
- **Axios** - HTTP client
- **Socket.io Client** - WebSocket client
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - State management
- **React Leaflet** - Map integration
- **React Quill** - Rich text editor
- **DOMPurify** - HTML sanitization
- **Timeago.js** - Timestamp formatting
- **React Icons** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Socket.io** - WebSocket server
- **JWT** - JSON Web Tokens
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing
- **Cookie Parser** - Cookie handling
- **Dotenv** - Environment variables

### External Services
- **Cloudinary** - Image hosting and management
- **OpenStreetMap** - Map tiles (via Leaflet)

---

## 📁 Project Structure

```
Real-Estate-MERN-Project/
│
├── frontend/                    # React frontend application
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── Components/          # Reusable components
│   │   │   ├── chat/           # Chat component
│   │   │   ├── navbar/         # Navigation bar
│   │   │   ├── footer/         # Footer
│   │   │   ├── search/         # Search component
│   │   │   ├── filter/         # Filter component
│   │   │   ├── list/           # Property list
│   │   │   ├── card/           # Property card
│   │   │   ├── map/            # Map component
│   │   │   ├── slider/         # Image slider
│   │   │   └── ...
│   │   ├── Pages/               # Page components
│   │   │   ├── home/           # Home page
│   │   │   ├── listPage/       # Property listings
│   │   │   ├── singlePage/     # Property details
│   │   │   ├── profilePage/    # User profile
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── ...
│   │   ├── lib/                 # Utilities
│   │   │   ├── loader.js       # React Router loaders
│   │   │   └── notificationStore.js
│   │   ├── context/             # React contexts
│   │   │   ├── AuthContext.jsx
│   │   │   └── SocketContext.jsx
│   │   ├── App.jsx              # Main app component
│   │   ├── main.jsx             # Entry point
│   │   └── index.css            # Global styles
│   ├── package.json
│   └── vite.config.js
│
├── server/                      # Express backend application
│   ├── config/
│   │   └── db_connection.js    # MongoDB connection
│   ├── controllers/             # Route controllers
│   │   ├── authController.js   # Authentication logic
│   │   ├── chatController.js   # Chat management
│   │   ├── messageController.js # Message handling
│   │   ├── postController.js   # Property CRUD
│   │   └── userController.js   # User operations
│   ├── middleware/
│   │   └── verifyToken.js      # JWT verification
│   ├── models/                  # Mongoose schemas
│   │   ├── userModel.js
│   │   ├── postModel.js
│   │   ├── postDetailModel.js
│   │   ├── chatModel.js
│   │   ├── messageModel.js
│   │   └── savedPostSchema.js
│   ├── routes/                  # API routes
│   │   ├── authRoutes.js
│   │   ├── chatRoutes.js
│   │   ├── messageRoutes.js
│   │   ├── postRouter.js
│   │   └── userRoutes.js
│   ├── .env                     # Environment variables
│   ├── server.js                # Main server file
│   └── package.json
│
└── socket/                      # Socket.io server
    ├── app.js                   # Socket server logic
    └── package.json
```

---

## ✅ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v5 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **npm** or **yarn** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

**Optional but Recommended:**
- **MongoDB Compass** - GUI for MongoDB
- **Postman** - API testing tool

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Shoaib4343/Real-Estate-MERN-Project.git
cd Real-Estate-MERN-Project
```

### 2. Install Dependencies

#### Install Frontend Dependencies
```bash
cd frontend
npm install
```

#### Install Backend Dependencies
```bash
cd ../server
npm install
```

#### Install Socket Server Dependencies
```bash
cd ../socket
npm install
```

---

## 🔐 Environment Variables

### Backend (.env file)

Create a `.env` file in the `server/` directory:

```env
# Database Configuration
DATABASE_URL=mongodb://127.0.0.1:27017/fypRealEstate

# JWT Secret Key (Generate a random string)
JWT_SECRET_KEY=your_super_secret_jwt_key_here_make_it_long_and_random

# Client URL (Frontend)
CLIENT_URL=http://localhost:5173

# Server Port (Optional, default is 8800)
PORT=8800
```

#### 🔑 Important Notes:

**DATABASE_URL:**
- For local MongoDB: `mongodb://127.0.0.1:27017/fypRealEstate`
- For MongoDB Atlas (cloud): 
  ```
  mongodb+srv://username:password@cluster.mongodb.net/fypRealEstate
  ```

**JWT_SECRET_KEY:**
- Generate a secure random string
- Example generation (Node.js):
  ```bash
  node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
  ```
- **NEVER** commit this to Git!

**CLIENT_URL:**
- Development: `http://localhost:5173`
- Production: Your deployed frontend URL

### Frontend Environment Variables

Create a `.env` file in the `frontend/` directory:

```env
# Cloudinary Configuration (for image uploads)
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

**Getting Cloudinary Credentials:**
1. Sign up at [Cloudinary](https://cloudinary.com/)
2. Go to Dashboard
3. Copy your **Cloud Name**
4. Go to Settings → Upload → Upload Presets
5. Create an **unsigned** upload preset
6. Copy the preset name

### Socket Server Configuration

The socket server is configured in `socket/app.js`:

```javascript
// CORS origin - update if needed
const io = new Server({
  cors: {
    origin: "http://localhost:5173",  // Frontend URL
  },
});

// Port - update if needed
io.listen("4000");
```

---

## 🏃‍♂️ Running the Application

### Development Mode

You need to run **THREE** servers simultaneously:

#### Terminal 1: MongoDB

```bash
# Start MongoDB (if not running as service)
mongod

# Or on macOS/Linux with Homebrew
brew services start mongodb-community
```

#### Terminal 2: Backend Server

```bash
cd server
npm start
```
**Server runs on:** `http://localhost:8800`

#### Terminal 3: Socket Server

```bash
cd socket
npm start
```
**Socket server runs on:** `http://localhost:4000`

#### Terminal 4: Frontend

```bash
cd frontend
npm run dev
```
**Frontend runs on:** `http://localhost:5173`

### Production Build

#### Frontend
```bash
cd frontend
npm run build
```
This creates an optimized production build in `frontend/dist/`

#### Backend/Socket
Use a process manager like **PM2**:

```bash
# Install PM2 globally
npm install -g pm2

# Start backend
cd server
pm2 start server.js --name "real-estate-api"

# Start socket server
cd ../socket
pm2 start app.js --name "real-estate-socket"

# View logs
pm2 logs

# Restart
pm2 restart all

# Stop
pm2 stop all
```

---

## 📡 API Documentation

### Base URLs
- **Backend API:** `http://localhost:8800`
- **Socket Server:** `http://localhost:4000`

### Authentication Endpoints

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "User created successfully",
  "user": {
    "_id": "...",
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "username": "john_doe",
  "password": "password123"
}
```

**Response:**
```json
{
  "_id": "...",
  "username": "john_doe",
  "email": "john@example.com",
  "avatar": "https://..."
}
```
*Sets HTTP-only cookie with JWT token*

#### Logout
```http
POST /auth/logout
```

### User Endpoints

*All user endpoints require authentication (JWT token in cookie).*

#### Get All Users
```http
GET /user
Cookie: token=<jwt_token>
```

#### Update User Profile
```http
PUT /user/:id
Content-Type: application/json
Cookie: token=<jwt_token>

{
  "username": "new_username",
  "email": "new@email.com",
  "password": "newpassword123",  // optional
  "avatar": "https://cloudinary.com/..."  // optional
}
```

#### Save/Unsave Post
```http
POST /user/save
Content-Type: application/json
Cookie: token=<jwt_token>

{
  "postId": "post_id_here"
}
```

#### Get User's Posts & Saved Posts
```http
GET /user/profilePosts
Cookie: token=<jwt_token>
```

**Response:**
```json
{
  "userPosts": [...],
  "savedPosts": [...]
}
```

#### Get Notification Count
```http
GET /user/notification
Cookie: token=<jwt_token>
```

**Response:**
```json
3
```

### Post Endpoints

#### Get All Posts (with filters)
```http
GET /post?city=London&type=rent&minPrice=1000&maxPrice=3000&bedroom=2
Cookie: token=<jwt_token>
```

**Query Parameters:**
- `city` - Filter by city name
- `type` - `buy` or `rent`
- `property` - `apartment`, `house`, `condo`, or `land`
- `bedroom` - Number of bedrooms
- `minPrice` - Minimum price
- `maxPrice` - Maximum price

#### Get Single Post
```http
GET /post/:id
Cookie: token=<jwt_token>
```

**Response:**
```json
{
  "_id": "...",
  "title": "Beautiful House",
  "price": 500000,
  "images": ["url1", "url2"],
  "address": "123 Main St",
  "city": "New York",
  "bedroom": 3,
  "bathroom": 2,
  "latitude": "40.7128",
  "longitude": "-74.0060",
  "type": "buy",
  "property": "house",
  "user": {
    "_id": "...",
    "username": "john_doe",
    "avatar": "..."
  },
  "postDetail": {
    "desc": "<p>Beautiful house...</p>",
    "utilities": "owner",
    "pet": "allowed",
    "size": 2000,
    "school": 500,
    "bus": 200,
    "restaurant": 100
  },
  "isSaved": false
}
```

#### Create Post
```http
POST /post
Content-Type: application/json
Cookie: token=<jwt_token>

{
  "postData": {
    "title": "Beautiful House",
    "price": 500000,
    "address": "123 Main St",
    "city": "New York",
    "bedroom": 3,
    "bathroom": 2,
    "latitude": "40.7128",
    "longitude": "-74.0060",
    "type": "buy",
    "property": "house",
    "images": ["url1", "url2"]
  },
  "postDetail": {
    "desc": "<p>Description...</p>",
    "utilities": "owner",
    "pet": "allowed",
    "income": "Minimum $80,000",
    "size": 2000,
    "school": 500,
    "bus": 200,
    "restaurant": 100
  }
}
```

#### Delete Post
```http
DELETE /post/:id
Cookie: token=<jwt_token>
```

### Chat Endpoints

#### Get All Chats
```http
GET /chats
Cookie: token=<jwt_token>
```

**Response:**
```json
[
  {
    "_id": "chat123",
    "userIDs": ["user1", "user2"],
    "messages": ["msg1", "msg2"],
    "seenBy": ["user1"],
    "lastMessage": "Hello!",
    "receiver": {
      "_id": "user2",
      "username": "jane_doe",
      "avatar": "..."
    }
  }
]
```

#### Get Single Chat with Messages
```http
GET /chats/:id
Cookie: token=<jwt_token>
```

**Response:**
```json
{
  "_id": "chat123",
  "userIDs": ["user1", "user2"],
  "messages": [
    {
      "_id": "msg1",
      "text": "Hello!",
      "userId": "user1",
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ],
  "seenBy": ["user1", "user2"],
  "lastMessage": "Hi there!"
}
```

#### Create Chat
```http
POST /chats
Content-Type: application/json
Cookie: token=<jwt_token>

{
  "receiverId": "user2_id"
}
```

#### Mark Chat as Read
```http
PUT /chats/read/:id
Cookie: token=<jwt_token>
```

#### Delete Chat
```http
DELETE /chats/:id
Cookie: token=<jwt_token>
```

### Message Endpoints

#### Send Message
```http
POST /messages/:chatId
Content-Type: application/json
Cookie: token=<jwt_token>

{
  "text": "Hello, is this property still available?"
}
```

**Response:**
```json
{
  "_id": "msg123",
  "text": "Hello, is this property still available?",
  "userId": "user1",
  "chatId": "chat456",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

---

## 🔌 Socket Events

### Client → Server Events

#### New User Connection
```javascript
socket.emit("newUser", userId);
```
- **When:** User logs in
- **Purpose:** Register user as online

#### Send Message
```javascript
socket.emit("sendMessage", {
  receiverId: "user2_id",
  data: {
    _id: "msg123",
    text: "Hello!",
    userId: "user1_id",
    chatId: "chat456",
    createdAt: "2024-01-15T10:30:00Z"
  }
});
```
- **When:** User sends a chat message
- **Purpose:** Deliver message in real-time

### Server → Client Events

#### Receive Message
```javascript
socket.on("getMessage", (data) => {
  // data = message object
  // Add to chat messages and display
});
```
- **When:** Another user sends you a message
- **Purpose:** Receive message in real-time

#### Disconnect
```javascript
socket.on("disconnect", () => {
  // User disconnected
});
```
- **When:** User closes browser or loses connection
- **Purpose:** Clean up online users list

---

## 💾 Database Schema

### User Schema
```javascript
{
  username: String (required, unique),
  email: String (required, unique),
  password: String (required, hashed),
  avatar: String,
  createdAt: Date,
  posts: [ObjectId] (ref: Post),
  savedPosts: [ObjectId] (ref: SavedPost),
  chats: [ObjectId] (ref: Chat)
}
```

### Post Schema
```javascript
{
  title: String (required),
  price: Number (required),
  images: [String] (required),
  address: String (required),
  city: String (required),
  bedroom: Number (required),
  bathroom: Number (required),
  latitude: String (required),
  longitude: String (required),
  type: String (enum: ['buy', 'rent'], required),
  property: String (enum: ['apartment', 'house', 'condo', 'land'], required),
  createdAt: Date,
  user: ObjectId (ref: User, required),
  postDetail: ObjectId (ref: PostDetail),
  savedPosts: [ObjectId] (ref: SavedPost)
}
```

### PostDetail Schema
```javascript
{
  desc: String (required),
  utilities: String,
  pet: String,
  income: String,
  size: Number,
  school: Number,
  bus: Number,
  restaurant: Number,
  post: ObjectId (ref: Post, required),
  createdAt: Date
}
```

### Chat Schema
```javascript
{
  users: [ObjectId] (ref: User, required),
  userIDs: [ObjectId] (required),
  createdAt: Date,
  seenBy: [ObjectId],
  messages: [ObjectId] (ref: Message),
  lastMessage: String
}
```

### Message Schema
```javascript
{
  text: String (required),
  userId: ObjectId (ref: User, required),
  chat: ObjectId (ref: Chat, required),
  chatId: ObjectId (required),
  createdAt: Date
}
```

### SavedPost Schema
```javascript
{
  user: ObjectId (ref: User, required),
  post: ObjectId (ref: Post, required),
  createdAt: Date
}
```
*Has compound index on (user, post) to ensure uniqueness*

---

## 🐛 Troubleshooting

### Common Issues

#### 1. MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution:**
- Ensure MongoDB is running: `mongod` or `brew services start mongodb-community`
- Check `DATABASE_URL` in `.env`

#### 2. CORS Errors
```
Access to XMLHttpRequest blocked by CORS policy
```
**Solution:**
- Verify `CLIENT_URL` in server `.env` matches frontend URL
- Check CORS configuration in `server.js`

#### 3. JWT Token Invalid
```
Token is not Valid!
```
**Solution:**
- Clear browser cookies
- Re-login to get new token
- Check `JWT_SECRET_KEY` in `.env`

#### 4. Socket Connection Failed
```
WebSocket connection failed
```
**Solution:**
- Ensure socket server is running on port 4000
- Check firewall settings
- Verify socket URL in `SocketContext.jsx`

#### 5. Images Not Uploading
```
Cloudinary upload failed
```
**Solution:**
- Verify Cloudinary credentials in frontend `.env`
- Check upload preset is unsigned
- Ensure internet connection

#### 6. Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::8800
```
**Solution:**
```bash
# Find process using port
lsof -i :8800

# Kill process
kill -9 <PID>
```

---

## 🔒 Security Best Practices

### For Production Deployment:

#### Environment Variables
- Never commit `.env` files
- Use environment variable management (AWS Secrets, Heroku Config Vars, etc.)
- Rotate JWT secrets periodically

#### HTTP-Only Cookies
- Set `httpOnly: true` for JWT cookies
- Set `secure: true` in production (HTTPS only)
- Set `sameSite: 'strict'` for CSRF protection

#### Password Security
- Minimum 8 characters
- Require uppercase, lowercase, numbers
- Implement rate limiting on login attempts

#### API Security
- Implement rate limiting (`express-rate-limit`)
- Add `helmet.js` for security headers
- Validate all user inputs
- Sanitize HTML content (already using DOMPurify)

#### Database Security
- Use MongoDB Atlas with IP whitelist
- Enable authentication
- Regular backups

---

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Manual](https://docs.mongodb.com/)
- [Socket.io Documentation](https://socket.io/docs/)
- [JWT Introduction](https://jwt.io/introduction)
- [Tailwind CSS](https://tailwindcss.com/docs)

---




<div align="center">

**Built with ❤️ using the MERN Stack**

⭐ Star this repository if you find it helpful!

</div>
