const express = require('express');
const {createTodo, updateTodo} = require('./types');
const {todoapp} = require('./db');
const app = express();

app.use(express.json());

app.get('/todo', async (req, res) => {
   const todo = await todoapp.find({});
   res.status(200).json({
    todo : todo
   });
});

app.post('/todos', async(req, res) => {
    const userPayLoad = req.body;
    const zodPayload = createTodo.safeParse(userPayLoad);
    if(!zodPayload.success) {
        return res.status(400).json({
            msg : 'you entered wrong input'
        });
    }
    
    //mongodb
    const todo = await todoapp.create({
        title : req.body.title,
        description : req.body.description,
        completed : false
    });

    res.status(200).json({
        msg : "imported to database"
    });

});

app.put('/completed', async (req,res) => {
    const updatedtodo = req.body;
    const prasetodo = updateTodo.safeParse(updatedtodo);
    if(!prasetodo.success) {
        return res.status(400).json({
            msg : 'you enterd wrong  input'
        });
    }

    // update mongodb
   await todoapp.update({
    _id : updateTodo.id
   }, {
    completed : true
   });

   res.json({
    msg : 'user update'
   });

});