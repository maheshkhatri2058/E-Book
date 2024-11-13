import React from 'react';
import Bannercard from '../home/Bannercard';

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
    <div className='flex w-full flex-col md:flex-row justify-between items-center   gap-12 py-40'>
      <div className='md:w-1/2 space-y-8 h-full'>
      <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell your books<span className='text-blue-700'>For the best prices </span></h2>
      <p className='md:w-4/5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus suscipit sunt eligendi beatae, laboriosam a saepe animi. A, beatae provident!</p>
      <input type='searc' placeholder='search a book' className='px-3 rounded-s-sm outline-none h-10 mx-2'></input>
      <button className='bg-blue-700 px-6 py-2 text-white font-medium transition-all ease-in duration-200 rounded-lg'>Search</button></div>
      <div><Bannercard/></div>
    </div>
      
    </div>
  )
}

export default Banner;
