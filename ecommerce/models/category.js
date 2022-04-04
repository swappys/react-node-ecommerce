const mongoose = require('mongoose')
//to hash the pwd
const crypto = require('crypto')
//to generate unique strings
let uuidv1 = require('uuidv1')


const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32,
        unique :true
    }

}, { timestamps: true }
);



module.exports = mongoose.model("Category",categorySchema);