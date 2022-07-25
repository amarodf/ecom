const router = require("express").Router();
const { register } = require("../controllers/auth.js");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require('dotenv')

dotenv.config()

router.post("/register", async (req, res) => {

    try {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
    
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        });

        const savedUser = await newUser.save()
        res.status(200).json(savedUser);


    } catch(err) {

        console.log(err)

    }
});

router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne(
            {
                username: req.body.username
            }
        );

        if(!user) {
            return next(createError(400, "User dont exist"))
        }

        const ishashedPassword = await bcrypt.compare(
            user.password,
            req.body.password
        );

        if(!ishashedPassword) {
            return next(createError(400, "Wrong Credentials"))

        }
        const { password, isAdmin, ...otherDetails } = user._doc;

        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT, {expiresIn:"3d"}
          );

        res
        .status(200)
        .json({ details: { ...otherDetails }, isAdmin });


    }catch(err){
        res.status(500).json(err);
    }

});

module.exports = router;