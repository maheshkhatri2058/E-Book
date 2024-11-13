const express = require('express')
const cors = require('cors');
const app = express()
require('./config.js')
const books=require('./books.js');
const uploads=require('./upload.js');

const port = process.env.PORT ||5000
//middleware configuration
 app.use(cors());
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/insert',async(req,res) => {
 const data=await new books(req.body);
 const result= data.save();
res.send(result);
})
app.post('/upload',async(req,res) => {
  const data=await new uploads(req.body);
  const result= data.save();
 res.send(result);
 })
app.get('/getbook', async(req, res) => {
  const info = await books.find();
  res.send(info);
  
})
app.get('/getuploadbook', async(req, res) => {
  const info = await uploads.find();
  res.send(info);
});
app.delete('/delete', async(req, res) => {
 let result=await books.deleteOne({title:"The Great Gatsby"});
 res.send(result);
})
app.get('/searchbook/:id', async(req, res)=>
{
  const id=req.params.id;
  const book=await books.findById(id);
  res.send(book);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})