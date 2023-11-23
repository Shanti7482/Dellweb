const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { error, success } = require('../utils/responseWrapper');


const signupController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.send(error(400, "all fields are required"))
        }

        const oldUser = await User.findOne({ email })
        if (oldUser) {
            return res.send(success(200, "user is already registered"))
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            email,
            password: hashedPassword,
        });
        res.status(201).json({ user });
    } catch (error) {

    }
};



const loginController = async (req, res) => {
    try {
        // res.send('hello from login')
        const { email, password } = req.body;
        if (!email || !password) {
            return res.send(error(400, 'all fields are required'))
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.send(error(400, "user is not registered"))
        }

        const matched = await bcrypt.compare(password, user.password);
        if (!matched) {
            return res.send(error(403, 'Incorrect Password'));
        }

        const accessToken = generateAccessToken({ _id: user._id, });
        const refreshToken = generateRefreshToken({ _id: user._id, });

        res.cookie('jwt', refreshToken, {
            // httpOnly:true,
            // secure:true
        })
        // return res.json({ accessToken });
        return res.send(success(201, accessToken))
    } catch (error) {

    }
};

//this api will check the refreToken valid and generate new token
const refreshAccessTokenController = async (req, res) => {
    // const { refreshToken } = req.body; 
    const cookies = req.cookies;

    if (!cookies.jwt) {
        return res.send(error(401, "refresh token cookies is required"))
    }
    const refreshToken = cookies.jwt;


    try {
        const decoded = jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_PRIVATE_KEY,
        );
        const _id = decoded._id;
        const accessToken = generateAccessToken({ _id });

        return res.send(success(201, { accessToken }))
        // return res.status(201).json({ accessToken });
    } catch (error) {
        console.log(error);
        return res.status(401).send('Invalid refresh token');


    }
}

//internal function
const generateAccessToken = (data) => {
    try {
        const token = jwt.sign(
            data,
            process.env.ACCESS_TOKEN_PRIVATE_KEY,
            { expiresIn: '15m' });
        console.log(token);
        return token;
    } catch (error) {
        console.log(error);
    }

}

const generateRefreshToken = (data) => {
    try {
        const token = jwt.sign(
            data,
            process.env.REFRESH_TOKEN_PRIVATE_KEY,
            { expiresIn: '1y' });
        console.log(token);
        return token;
    } catch (error) {
        console.log(error);
    }

}


module.exports = {
    signupController,
    loginController,
    refreshAccessTokenController,
}