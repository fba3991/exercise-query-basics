import mongoose from "mongoose";
const { Schema, model } = mongoose;

const addressSchema = new Schema({
  street: String,
  number: Number,
  city: String,
});
const authorSchema = new Schema({
  name: String,
  address: addressSchema,
  age: Number,
  hobbies: [String],
  email: String,
});

const authorModels = model("Author", authorSchema);

export default authorModels;
