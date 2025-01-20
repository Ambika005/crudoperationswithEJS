const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/monogbpraticespace`);

const userSchema = mongoose.Schema({
    name:String,
    email: String,
    username: String
})

module.exports = mongoose.model('singleuser',userSchema) 