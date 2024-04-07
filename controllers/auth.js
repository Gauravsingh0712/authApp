const bcrypt = require("bcrypt");
const User = require("../models/userModel");

exports.signup = async (req, res) => {

    try {
        //fetch data from req.body
        const { name, email, password, role } = req.body;

        //check whether user already exists
        const userExists = await User.findOne({ email });
        //if user exists, return error
        if (userExists) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        //secure password
        let hashedPassword;
        try {
            //hashed password using bcrypt algorithm
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Error while hashing password"
            });
        }

        //create new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        return res.status(200).json({
            success: true,
            message: "User created successfully",
            user
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be created , please try again"
        });
    }


}