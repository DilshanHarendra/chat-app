const express = require('express');
const  app =express()
const server =app.listen(4000,()=>console.log('server running'))
const io = require('socket.io')(server)
const cors = require('cors');
app.use(cors())



const users= require('./backend/assert/users.json')
let tempUser=users
let currentUsers=[]

io.on('connection', socket => {


    socket.on('newUser',()=>{
        let index= Math.floor(Math.random() * tempUser.length);
        tempUser[index].socket=socket.id
        currentUsers.push(tempUser[index])
        socket.emit('me',tempUser[index]);
        io.emit('users',currentUsers)
        tempUser.splice(index,1)
    })


    socket.on('send',(data)=>{
        socket.broadcast.to(data.socket).emit('receive',{...data,send:false});
    })
})


app.get('/v1/test',(req,res)=>{
    res.json(users)
})


