import React, { useEffect, useState } from 'react';
// Import Swiper React components
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
const Bestsellerbook = () => {
  const [book, setbook]=useState([]);
  useEffect(() =>
  {
   fetch('http://localhost:5000/getbook')
     .then(res => res.json())
     .then((data) =>
      { console.log(setbook(data.slice(0,5)))
  });
     console.log(book);
  }
  ,[]);
  return (
    <>
 <div className='p-2 bg-white'>
    <h1 className='text-4xl font-bold text-center m-2 text-orange-600'>Best Selling Books</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
       
        {book.map((data, index) =>{
      return (
        <SwiperSlide>
        <div key={index} className='flex justify-center items-center p-2 m-2 flex-col shadow-sm shadow-slate-500'>
        <Link to='/singlebook'>
        <img className='h-[240px] w-[200px]' src={data.imageurl} alt={data.title} /></Link>
        <h2 className='bg-blue-500 fixed top-0 right-4 text-white'><ShoppingCartIcon></ShoppingCartIcon></h2>
         <h1 className='text-2xl font-bold'>{data.title}</h1>
          <h1 className='text-xl font-bold'>{data.author}</h1>
          <p>{data.description}</p>
        

        </div>
        </SwiperSlide>
      )
    
    })}
  
      </Swiper>
      
    </div>
   
    </>
   
  )
}

export default Bestsellerbook;
