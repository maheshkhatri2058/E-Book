const mongoose= require('mongoose');
const uploadschemas=mongoose.Schema({
  title:String,
  author:String,
  genre:String,
  imageurl:String,
  description:String,
  bookpdf:String,
});
const uploads=mongoose.model('uploads',uploadschemas);
module.exports=uploads;
