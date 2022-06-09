import { ChatAlt2Icon } from '@heroicons/react/solid';
import React from 'react';
import bannebg from '../images/bannerbg.png'

import banner from '../images/banner.png'

const Banner = () => {
    return (
        <div>
                      <div class="hero md:mt-10 lg:mt-20 bg-base-200 py-5">
            <div class="hero-content flex-col lg:flex-row-reverse">
            <img src={banner} class="bannerimg  " />
                <div className='lg:pr-10'>
                <h1 class=" font-bold text-left banner-tittle">Hay,I am <span className='text-primary font-bold'>Arif Hossain</span> </h1>
                <div class="wrapper">
                  <div class="static-text">I am a</div>
                    <ul class="daynamic-text">
        
                      <li>Web designer </li>
                      <li>Web developer</li>
                      <li>Programmer</li>
                      <li>Web developer</li>
                    
  
                     
                    </ul>
                  </div>
                <p class="py-6 text-justify home-text">Are you looking for a full-stack developer in MERN Stack? Then you are at right place. I'm very experienced in this stack and still exploring it. I have developed many application using <span className='lowercase'>HTML ,CSS, BOOTSTRAP, TAILWIND, REACT JS,NODE JS, EXPESS JS, MONGO DB</span> stack including many e-com and business applications. </p>
                <div className='text-left mb-5'>
                <a href='https://drive.google.com/file/d/1slP79nfoFod3Ty6OToA9TGC74oB90jok/view' target="_blank"> <button class="btn btn-outline btn-primary mt-5">Download  Resume</button></a>
                </div>
                </div>
            </div>
        </div>
        <div className='bannerbg'>
          <img src={bannebg} className="w-full" alt=''/>
        </div>
        </div>
    );
};

export default Banner;