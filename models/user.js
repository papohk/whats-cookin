const mongoose = require("mongoose")
const {Schema, model} = mongoose

const schema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 3
    },

    email: {
        type: String,
        required: true,
        unique:true,
    },

    password: {
        type: String,
        required: true,
        minlength: 3
    },
}

)

module.exports = model("user", schema)