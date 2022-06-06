import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { LinkIcon } from '@heroicons/react/solid';


const Projects = ({project}) => {
    const {name,img1,img2,img3,technology,descripation,live}=project;
    return (
        <div className='project-box py-5 px-5 lg:px-10 rounded-xl' >
            <div>
            <Swiper
    breakpoints={{
      576: {
        // width: 576,
        slidesPerView: 1,
      },
      768: {
        // width: 768,
        slidesPerView: 1,
      },
    }}
    modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={20}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide><img src={img1} alt=""/> </SwiperSlide>
    <SwiperSlide><img src={img2} alt=""/></SwiperSlide>
    <SwiperSlide><img src={img3} alt=""/></SwiperSlide>

  </Swiper>
                
                <h2 className='text-2xl font-bold my-5 text-primary uppercase'>{name}</h2>
                <h4 className='Technology-t mb-4'>Used Technology:</h4>
                <div className='grid gap-2 grid-cols-4 lg:grid-cols-4 md:grid-cols-3 lg:gap-4 md:gap-4'>
                 {technology.map(t => <p className='technology-text bg-primary text-center p-2 text-white rounded'>{t}</p>)}
                </div>
                <p className='mt-5'>{descripation}</p>
                <a href={live} target="_blank"><button className="livebtn btn btn-outline btn-primary w-full mt-10">Live Preview <LinkIcon className='live-icon ml-4'></LinkIcon> </button></a>
            </div>
        </div>
    );
};

export default Projects;