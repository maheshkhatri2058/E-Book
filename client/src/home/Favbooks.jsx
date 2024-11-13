import React from 'react';
import favbook from '../assets/favoritebook.jpg';

const Favbooks = () => {
  return (
    <div className='px-4 flex lg:px-24 my-20  justify-between items-center gap-12 max-sm:flex-col'>
       <div className='md:w-1/2'>
        <img src={favbook} alt="Favoruitebook" className='rounded px-10 md:w-10/12 ' />
       </div>
       <div className='md:w-1/2 flex flex-col space-y-6'>
        <h2 className='text-3xl font-bold md:w-3/4 leading-snug'>Find Your Favourite <span className='text-orange-500'>Book Here!</span></h2>
        <p className='text-xl mb-10 md-w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, veniam. Praesentium recusandae modi dignissimos minima voluptatum quo, nihil magnam! Molestiae distinctio necessitatibus quas magni, doloremque voluptates pariatur dignissimos magnam nobis?</p>
        <div className='flex flex-col sm:flex-row justify-between gap-6 md-w-3/4 my-14 px-2'>
          <div>
            <h2 className='text-2xl font-bold'>5000+</h2>
            <h2 className='text-xl font-semibolds'>Book Listening</h2>
          </div>
          <div>
            <h2 className='text-2xl font-bold'>8000+</h2>
            <h2 className='text-xl font-semibolds'>Registered User</h2>
          </div>
          <div>
            <h2 className='text-2xl font-bold'>1000+</h2>
            <h2 className='text-xl font-semibolds'>PDF Downloads</h2>
          </div>
        </div>
        <div>
          <button className='rounded-md bg-blue-600 p-2 font-bold text-white'>Explore More</button>
        </div>
       </div>
    </div>
  )
}

export default Favbooks
