import express from "express";
import dotenv from "dotenv";
import booksRouter from './routes/booksRoutes.js';
import authorRoutes from './routes/authorsRoutes.js'
import mongoose from "mongoose";


dotenv.config();

const { MONGO_CONNECTION } = process.env;
console.log(MONGO_CONNECTION);

const app =express();
app.use(express.json())

app.use('/books', booksRouter);
app.use('/authors', authorRoutes)


mongoose.connect( MONGO_CONNECTION)
.then(()=>{
    console.log('Connesione a mongo con successo.');
  app.listen(3000,() =>{
    console.log(' Il server e in ascolto sulla porta 3000');
  });  
})
.catch((err) => console.error(err));