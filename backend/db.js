const mongoose = require('mongoose');
const mongoURI = " mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>
    {
        console.log("Connected To Mongo Successfully");
    })
}
module.exports = connectToMongo;