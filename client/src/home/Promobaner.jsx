import React from 'react';
import Banner from '../assets/banner.jpg';

const Promobaner = () => {
  return (
    <div className="flex justify-around mt-16 bg-teal-100 px-4 max-md:flex-col max:md:justify-center">
      <div className='w-[50%] px-10 p-5 max-sm:w-[100%] item-center '>
        <h2 className='text-4xl py-8'>2023 National Book Awards for comedy shortlist</h2>
        <p>The 2023 National Book Awards celebrated diverse narratives across five categories, spotlighting powerful voices and unique perspectives. In fiction, Justin Torres won for Blackouts, a novel that creatively intertwines historical elements with themes of love and memory, exploring identity in fresh, innovative ways. Ned Blackhawk’s The Rediscovery of America: Native Peoples and the Unmaking of U.S. History took the nonfiction prize, reframing U.S. history to highlight the foundational influence of Indigenous peoples on the nation’s developmen</p>
        <button className='rounded-md bg-blue-600 p-2 font-bold text-white'>Explore More</button>
      </div>
      <div className='w-[50%] px-10 flex p-5 justify-center max-sm:w-[100%] item-center'>
        <img src={Banner} className='rounded-lg h-[400px] w-[350px]' ></img>
      </div>
    </div>
  )
}

export default Promobaner
