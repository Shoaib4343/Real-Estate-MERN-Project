// .env.config
require("dotenv").config()
const express = require("express");
const app = express();
const authRouter = require('./routes/authRoutes')
const testRouter = require('./routes/testRouter')
const postRouter = require('./routes/postRouter')
const chatRouter = require('./routes/chatRoutes')
const messageRouter = require('./routes/messageRoutes')

const cors = require('cors')
const cookieParser = require('cookie-parser')
//db connection
const db = require("./config/db_connnection");
const userRouter = require("./routes/userRoutes");

app.use(cors({origin:process.env.CLIENT_URL, credentials:true}))
app.use(express.json()) //allow us to send json data
app.use(cookieParser()); // Use cookie-parser middleware

// Routers
app.use("/auth",authRouter)
app.use("/test",testRouter)
app.use("/user",userRouter)
app.use("/post",postRouter)
app.use("/chats",chatRouter)
app.use("/messages",messageRouter)



app.get("/",function(req,res){
    res.send("Working fine")
    
})

app.listen(8800,()=> console.log('port running at 8800'))
