const mongoose = require("mongoose");

const userModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    pic: {
        type: String,
        require: true,
        default: "https://media.istockphoto.com/id/1652816688/photo/img_7913.jpg?s=1024x1024&w=is&k=20&c=Oyyt1lw6ZvcYO6Gva5YM4TsuvSpIqJ8X0jIa3cbWhbo="
    }
},
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userModel);
module.exports = User;