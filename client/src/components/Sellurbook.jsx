import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from 'react';
import { useEffect, useState } from 'react';
import '../index.css';
 function Sellurbook()
 {
  const [book, setbook] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getuploadbook")
      .then((res) => res.json())
      .then((data) => {
        setbook(data);
      });
    console.log(book);
  }, []);
  function submithandler(e)
  {
  e.preventDefault();
  const form=e.target;
  const author=form.author.value;
  const title=form.title.value;
  const description=form.description.value;
  const imageurl=form.imageurl.value;
  const bookpdf=form.pdfurl.value;
  const genre=form.genre.value;
  let myobj={title,author,genre,imageurl,description,bookpdf}
  console.log(myobj);
  fetch('http://localhost:5000/upload' ,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(myobj)  //converting object to string before sending it to server
  }).then(res=>res.json()).then(data=>alert('Success'));
}
function deleteapi(id)
{
  fetch(`http://localhost:5000/delete/${id}`, {
    method: 'DELETE'})
    setbook(book.filter((book) => book._id !== id));
  alert(id);
}

return (
    <>
    <div className='mt-40'>
    <h2 className='text-2xl font-bold  text-center text-amber-800'>Enter Your Book Details:</h2>
    <form action="" onSubmit={submithandler} name='form' className='flex gap-10 flex-col' >
    <div className='flex gap-4 justify-around items-center max-md:flex-col'>
    <label htmlFor="Title">
    <div className=" font-bold py-2"> Enter your Title:</div>
    <input type="text" required placeholder='Enter a title' name='title' className='border-2 border-solid border-slate-400  outline-none text-black bg-white px-4 rounded-md p-1'/>
    </label>
    <label htmlFor="author">
    <div className=" font-bold py-2"> Enter Author Name:</div>
    <input type="text" required placeholder='Enter an author Name'name='author' className='border-2 border-solid border-slate-400 outline-none text-black bg-white px-4 rounded-md py-1'/>
    </label>
    </div>
    <div className='flex gap-4 justify-around  items-center max-md:flex-col'>
    <label htmlFor="Pdfurl">
    <div className=" font-bold py-2">  Enter PDF URL:</div>
  
    <input type="text" required placeholder='Enter a pdf url' name='pdfurl' className='border-2 border-solid border-slate-400 outline-none text-black bg-white px-4 py-1 rounded-md'/>
    </label>
       <label htmlFor="Image url">
       <div className=" font-bold py-2">  Enter Image URL:</div>
      <input required type="text" placeholder='Enter an image url'name='imageurl' className='border-2 border-solid border-slate-400 outline-none text-black bg-white px-4 rounded-md py-1'/>
      </label>
    </div>
    <div className='flex gap-4 justify-around items-center max-md:flex-col'>
     <div >  
     <div className=" font-bold py-2">Enter a Description:</div>
     <input type="text" required placeholder='Enter Description' name='description' className='border-2 border-solid border-slate-400 outline-none text-black bg-white px-4 py-1 rounded-md'/>
     </div>
       <div>
        <div className=" font-bold py-2">Enter a Genre:</div>
        <select name="genre" id="" className='outline-none border-2 border-solid border-slate-400 rounded-md px-12 py-1 text-black bg-white' placeholder="Choose a Category">
      <option value="Select Genre">Select a  Genre</option>
      <option value="Fiction">Fiction</option>
      <option value="Non-Fiction">Non-Fiction</option>
      <option value="Science">Science</option>
      <option value="History">History</option>
      <option value="Biography">Biography</option>
      <option value="Business">Business</option>
      <option value="Technology">Technology</option>
      <option value="Self-Help">Self-Help</option>
      <option value="Cooking">Cooking</option>
      <option value="Art">Art</option>
      <option value="Sports">Sports</option>
      <option value="Health">Health</option>
      <option value="Education">Education</option>
      <option value="Travel">Travel</option>
     </select>
       </div>
    
    </div>
       
    <div className='flex justify-center items-center'>
    <input type="submit" className='  text-white flex bg-orange-500 px-3 py-1 rounded-md'></input> 
     </div>
    </form>
 </div>
   <div className='flex flex-wrap gap-6 px-10'>
      <div>
      <h2 className="my-20 text-3xl font-bold text-center">Book On Sells</h2>
      <div className="flex flex-wrap gap-4 justify-center items-center">
      {book.map((b, index) => (
        <div key={index}>
          <Card sx={{ maxWidth: 345 }}>
          <div className="flex justify-center">
          <img src={b.imageurl} alt="" className="h-[220px] w-[180px] text-center flex justify-center"/>
          </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {b.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
               {b.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{backgroundColor:'blue', color:'#fff', borderRadius:"10px", padding:'5px'}} >Buy Now</Button>
              <Button size="small" >Learn More</Button>
              <Button
               size="small" sx={{bgcolor:"red", color:'#fff', }} 
               onClick={()=>deleteapi(b._id)}>Delete</Button>

            </CardActions>
          </Card>
        </div>
      ))}
      </div>
     
    </div>
      
  </div>
    </>
   
  );
}
export default  Sellurbook;