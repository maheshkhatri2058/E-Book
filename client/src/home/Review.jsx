import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import List from '../review.json';
import './review.css';

// import required modules
import { Navigation, Pagination, Parallax } from 'swiper/modules';
 function Review() {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': 'black',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        
        {
          List.map((item, index) => (
            <SwiperSlide className='py-20'>
            <div key={index} className=''>
            <div className="title" data-swiper-parallax="-300">
          </div>
          <div className="subtitle text-black text-center text-3xl font-bold" data-swiper-parallax="-200">
            {item.username}
          </div>
          <div className="text text-black text-center" data-swiper-parallax="-100">
            <p className='text-center px-20 py-10'>
            {item.review}
            </p>
          </div>
            </div>
            </SwiperSlide>
            
        ))};
          
       

      </Swiper>
    </>
  );
}
export default Review;
