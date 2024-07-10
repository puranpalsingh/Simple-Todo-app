const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://singhpuranpal12:WBLc5aZbDppdRthE@cluster0.u6d1ctn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const userschema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
});

const todoapp = mongoose.model('todos', userschema);

module.exports = {
    todoapp
};