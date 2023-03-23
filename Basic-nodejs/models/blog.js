const mongoose = require('mongoose');

const Schema = mongoose.Schema; // a Schema is a constructor function

// schemas define structure of our documents!

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

// model name should be the singular of the collection's name
const Blog = mongoose.model('Blog', blogSchema); // create schema to define object and then build model based on schema
module.exports = Blog;