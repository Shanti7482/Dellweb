

const getAllPostController = async (req,res)=>{
    console.log(req._id);
    res.send('i am geAllPostConstorller');

}


module.exports = {
    getAllPostController
}