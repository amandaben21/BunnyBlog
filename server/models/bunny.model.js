const mongoose = require('mongoose');

const BunnySchema = new mongoose.Schema({
    title:{
        type: String,
        require: [true, "Title of Bunny Blog is required"],
        minlength: [3, "Title must be at least 3 characters long"]
    },
    //name of person who upload
    name:{
        type: String,
        require: [true, "Your name is required"],
        minlength: [3, "Your name must be at least 3 characters long"]
    },

    desc:{
        type: String,
        require: [true, "Your writing is required"],
        minlength: [5, "Your blog must be at least 5 characters long"]
    },

}, { timestamps: true })

module.exports = mongoose.model("bunny", BunnySchema);