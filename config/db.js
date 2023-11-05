const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://chbuela22:Buela_222@cluster0.ebaa3v8.mongodb.net/BookStore');

const db = mongoose.connection;

db.on('error',(error)=>{
    console.log('error to connecting with database')
})

db.once('open',function(){
    console.log('Successfully connected to database');
})