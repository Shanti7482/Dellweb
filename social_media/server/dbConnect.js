const mongoose = require('mongoose');

module.exports = async ( )=>{
    const mongoUri = `mongodb+srv://shanti7482:doFsBRzKnBcKZyG5@cluster0.jjfa6ui.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(mongoUri)
        console.log(`mongoDB connected: `)
        
    } catch (error) {
        console.log(error)
        peocess.exit(1)
    }
}