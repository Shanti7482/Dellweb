const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config('./.env');
const dbConnect = require('./dbConnect');
const authRouter = require('./routers/authRouter');
const postRouter = require('./routers/postRouter')
const morgan = require('morgan')
const cookieParser= require('cookie-parser')



//middlewares
app.use(express.json())
app.use(morgan('common'))
app.use(cookieParser())


app.use('/auth',authRouter)
app.use('/post',postRouter)


app.get('/',(req,res)=>{
    res.send('hell0')
}) 


dbConnect();

const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`server start on port no ${PORT}`)
})


