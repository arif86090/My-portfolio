import { ChatAlt2Icon } from '@heroicons/react/solid';
import React from 'react';

import banner from '../images/banner.png'

const Banner = () => {
    return (
        <div>
                      <div class="hero min-h-screen bg-base-200">
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
                <p class="py-6 text-justify home-text">Are you looking for a full-stack developer in MERN Stack? Then you are at right place. I'm very experienced in this stack and still exploring it. I have developed many application using this stack including many e-com and business applications. </p>
                <div className='text-left'>
                <button class="btn  btn-primary font-bold text-white">Contact Me <ChatAlt2Icon className='ChatAlt2Icon ml-4'></ChatAlt2Icon> </button>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;