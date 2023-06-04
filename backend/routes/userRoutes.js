// url path
const express = require("express");
const { home, createUser, getUsers, edituser, deleteUser } = require("../controllers/userControllers");
// const { create } = require("../models/userModel");

const router = express.Router();

router.get("/", home)
router.post("/createUser", createUser)
router.get("/getUsers", getUsers)
router.put("/edituser/:id", edituser)
router.delete("/deleteUser/:id", deleteUser)

module.exports = router;