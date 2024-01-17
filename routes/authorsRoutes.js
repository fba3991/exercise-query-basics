import  express  from "express";
import Author from "../models/authorModels.js";

const router = express();

router.get('/', async (req, res) =>{
    try{
      const authors=  await Author.find()
    res.send(authors)  
    }catch(error){
        res.status(500).send(error.messagge)
    }
    
}) 


router.post('/', async (req, res) => {
    try {
        const author = await Author.create(req.body);
        console.log('Nuovo libro creato:', author);
        res.send(author);
    } catch (error) {
        console.error('Errore durante la creazione del libro:', error);
        res.status(400).send(error.message);
    }
});



export default router;