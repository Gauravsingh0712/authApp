const express = require("express");
const router = express.Router();

const { login, signup } = require("../controllers/auth");
const { auth, isStudent, isAdmin } = require("../middlewares/auth");


router.post("/login", login);
router.post("/signup", signup);

//testing route for single middleware
router.get("/test", auth, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to protected route of test"
    })
})

//protected routes

router.get("/student", auth, isStudent, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to protected route of student"
    })
});

router.get("/admin", auth, isAdmin, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to protected route of admin"
    })
})

module.exports = router