import * as React from 'react';
 function Sellurbook()
 {
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

return (
    <>
    <div className='mt-40'>
    <form action="" onSubmit={submithandler} name='form' className='flex gap-10 flex-col' >
    <div className='flex gap-4 justify-around items-center '>
    <input type="text" required placeholder='Enter a title' name='title' className='border-2 border-solid border-slate-400  outline-none text-black bg-white px-4 rounded-md p-1'/>
    <input type="text" required placeholder='Enter an author Name'name='author' className='border-2 border-solid border-slate-400 outline-none text-black bg-white px-4 rounded-md py-1'/>
    </div>
    <div className='flex gap-4 justify-around  items-center'>
    <input type="text" required placeholder='Enter a pdf url' name='pdfurl' className='border-2 border-solid border-slate-400 outline-none text-black bg-white px-4 py-1 rounded-md'/>
   
      <input required type="text" placeholder='Enter an image url'name='imageurl' className='border-2 border-solid border-slate-400 outline-none text-black bg-white px-4 rounded-md py-1'/>
    </div>
    <div className='flex gap-4 justify-around items-center'>
     <input type="text" required placeholder='Enter Description' name='description' className='border-2 border-solid border-slate-400 outline-none text-black bg-white px-4 py-1 rounded-md'/>
     <select name="genre" id="" className='outline-none border-2 border-solid border-slate-400 rounded-md px-14 py-1 text-black bg-white' placeholder="Choose a Category">
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
       
    <div className='flex justify-center items-center'>
    <input type="submit" className='  text-white flex bg-orange-500 px-3 py-1 rounded-md'></input> 
     </div>
    </form>
     
      </div>
    <h2 className=' flex justify-center text-2xl mt-20 px-10'>Some Popular Books</h2>
   <div className='flex flex-wrap gap-6 px-10'>
   <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequuntur pariatur, maxime commodi ullam repellat veniam beatae vitae nemo et illum ut nostrum quisquam tempora architecto necessitatibus. Itaque, natus ipsum!</h2>
    <div> 
      </div>
      
  </div>
    </>
   
  );
}
export default  Sellurbook;