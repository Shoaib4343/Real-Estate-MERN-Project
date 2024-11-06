const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URL)
.then(()=>{
    console.log('db connected successfully....')
}).catch((err)=>{
    console.log('db connected Failed',err)
})

module.exports = mongoose.connect;