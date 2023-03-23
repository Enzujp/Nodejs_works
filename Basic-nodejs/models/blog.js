const mongoose = require('mongoose');

const Schema = mongoose.Schema; // a Schema is a constructor function


const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    snippet: {
        type: String,
        required: true
    },

    body: {
        type: String,
        required: true
    }
}, { timestamps: true }) 