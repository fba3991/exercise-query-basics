import express from "express";
import Book from "../models/bookModels.js";
const router =express.Router();

router.get('/', async (req, res) =>{
    try{
      const books=  await Book.find()
      .populate('author',[ 'name','age']);
    res.send(books)  
    }catch(error){
        res.status(500).send(error.messagge)
    }
    
}) 


router.post('/', async (req, res) => {
    try {
        const book = await Book.create(req.body);
        console.log('Nuovo libro creato:', book);
        res.send(book);
    } catch (error) {
        console.error('Errore durante la creazione del libro:', error);
        res.status(400).send(error.message);
    }
});



export default router;