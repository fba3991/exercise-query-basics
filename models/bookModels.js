import mongoose, {  SchemaTypes } from "mongoose";
const {Schema,model,}= mongoose;

 const bookSchema = new Schema({
    title: {
     type:String,
     minLength:4   
    },
    year:{
       type: Number,
       min:1900,
       max:2024
    },
    author:{
      type:SchemaTypes.ObjectId ,
      ref: "Author",
      required:true,
    }

})


 
const bookModel= model('Book', bookSchema);
export default bookModel; 


