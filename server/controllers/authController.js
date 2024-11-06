const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Register a new user
const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if the user already exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "You already have an account. Please login." });
        }

        // Hash the password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashPassword
        });
        await newUser.save();

        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.log("User not created", error);
        res.status(500).json({ message: "Failed to create user!" });
    }
};

// Login a user
const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "Invalid Credentials!" });
        }

        // Compare the provided password with the hashed password in the DB
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid Credentials!" });
        }

        // Generate a JWT token
        const token = jwt.sign(
            {
                id: user._id,
                // isAdmin: false, 
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '7d' } // Token valid for 7 days
        );

        // Exclude the password from the user object
        const { password: userPassword, ...userWithoutPassword } = user.toObject(); // Convert mongoose document to plain object

        // Set the token 
        res.cookie("token", token, {
            httpOnly: false,
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        }).status(200).json(userWithoutPassword ); // Send user without password
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to login!" });
    }
};


// Logout a user
const logout = (req, res) => {
    res.clearCookie("token").status(200).json({ message: "Logout successful" });
};

module.exports = { register, login, logout };
