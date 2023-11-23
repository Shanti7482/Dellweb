const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");

dotenv.config();

const app = express();
// const port = 5000;


app.get("/", (req, res) => {
    res.send("Api is running");
})

app.get('/api/chat', (req, res) => {
    res.send(chats);
})

app.get('/api/chat/:id', (req, res) => {
    // console.log(req.params.id);

    const singleChat = chats.find((e) => e._id === req.params.id);
    res.send(singleChat);

})


const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server start on port no. ${port}`);
})