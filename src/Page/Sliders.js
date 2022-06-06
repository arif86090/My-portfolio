import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Sliders = () => {

  return (
    
    <Swiper
    breakpoints={{
      576: {
        // width: 576,
        slidesPerView: 1,
      },
      768: {
        // width: 768,
        slidesPerView: 2,
      },
    }}
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={20}
    // slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide><div className='h-96 w-full bg-red-500'><p>jdfisjfup ijsdfpiujsdujf</p></div></SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    
  </Swiper>
  );
};

export default Sliders;