// logic
const User = require("../models/userModel")

exports.home = async (req, res) => {
    await res.send("Hello Form Prince Kumar Paswan")
}




exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        // To  check all the details
        if (!name || !email) {
            throw new Error("Name and Email are Required")
        }
        const userExist = await User.findOne({ email });
        if (userExist) {
            throw new Error("Email Already Exists")
        }
        // Inserting into the database

        const user = await User.create({ name, email });
        res.status(201).json({
            sucess: true,
            message: "User Created SucessFully",
            user,
        })

    } catch (error) {
        console.log(error);

    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            sucess: true,
            users,
        });

    } catch (error) {
        console.log(error)
        res.status(401).json({
            sucess: false,
            message: error.message
        });
    }
}


exports.edituser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            sucess: true,
            message: "User  Updated Sucess"
        })
    } catch (error) {
        console.log(error);
        resstatus(401).json({
            sucess: false,
            message: error.message
        })
    }
}


exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id, req.body);
        res.status(200).json({
            sucess: true,
            message: "User  Updated Sucess"
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            sucess: false,
            message: error.message
        })
    }
}

// module.exports = { home }