const userModel = require("../models/userModel")
const bcrypt = require('bcrypt');

// show all users
const getUsers =async (req,res)=>{
   try{
    const users = await userModel.find()
    res.status(200).json(users)

   }catch(error){
    console.log(error)
    res.status(500).json({message:"Failed to get Users"})
   }
}
// get one user by id 
const getUser =async (req,res)=>{
    const id = req.params.id
    try{
        const user = await userModel.findOne({_id:id})
        res.status(200).json(user)
       }catch(error){
        console.log(error)
        res.status(500).json({message:"Failed to get User"})
       }
}

// update user
const updateUser = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId; //  this comes from your authentication middleware
    const { password, avatar, ...inputs } = req.body;

    // Check if the user is authorized to update
    if (id !== tokenUserId) {
        return res.status(403).json({ message: "Not Authorized!" });
    }

    try {
        let updatedData = { ...inputs }; // Start with the inputs

        // If a new password is provided, hash it
        if (password) {
            updatedData.password = await bcrypt.hash(password, 10);
        }

        // Include avatar if provided
        if (avatar) {
            updatedData.avatar = avatar;
        }

        // Update the user in the database
        const updatedUser = await userModel.findOneAndUpdate({ _id: id }, updatedData, {
            new: true, // Return the updated document
            runValidators: true // Run schema validation
        });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found!" });
        }

        // Exclude the password before sending the response
        const { password: userPassword, ...rest } = updatedUser._doc;

        res.status(200).json(rest);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to update User" });
    }
};


const deleteUser =async (req,res)=>{
    try{
        console.log('working')
    
       }catch(error){
        console.log(error)
        res.status(500).json({message:"Failed to delete User"})
       }
}
module.exports = {getUsers,getUser,updateUser,deleteUser}