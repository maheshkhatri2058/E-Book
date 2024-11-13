import React from 'react';
import Banner from '../assets/banner.jpg';

const Promobaner = () => {
  return (
    <div className="mt-16 bg-teal-100 px-4 lg:px-24 flex justify-center max-md:flex-col">
      <div className='p-10 w-1/2'>
        <h2 className='text-4xl py-8'>2023 National Book Awards for comedy shortlist</h2>
        <p>The 2023 National Book Awards celebrated diverse narratives across five categories, spotlighting powerful voices and unique perspectives. In fiction, Justin Torres won for Blackouts, a novel that creatively intertwines historical elements with themes of love and memory, exploring identity in fresh, innovative ways. Ned Blackhawk’s The Rediscovery of America: Native Peoples and the Unmaking of U.S. History took the nonfiction prize, reframing U.S. history to highlight the foundational influence of Indigenous peoples on the nation’s developmen</p>
        <button className='rounded-md bg-blue-600 p-2 font-bold text-white'>Explore More</button>
      </div>
      <div className='w-1/2'>
        <img src={Banner} className='rounded-lg' width={'200px'}></img>
      </div>
    </div>
  )
}

export default Promobaner
