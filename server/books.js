const mongoose= require('mongoose');
const bookschemas=mongoose.Schema({
  title:String,
  author:String,
  genre:String,
  imageurl:String,
  description:String,
  bookpdf:String,
});
const books=mongoose.model('books',bookschemas);
module.exports=books;
