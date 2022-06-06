import React from 'react';
import aboutImg from '../images/about.jpg'

const About = () => {
    return (
        <div className='px-5 mt-10 '>
            <div className='container m-auto py-5' >
                <div className='text-center mt-10 mb-20'>
                    <h2 className='text-3xl font-bold uppercase heading-text'> About Me</h2>
                    
                    <p></p>
                </div>
                <div class="hero  ">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src={aboutImg} class="aboutimg rounded-lg shadow-2xl" />
                        <div className='lg:px-10 md:mt-10 '>
                        <h1 class="text-2xl font-bold ">HELLO, MY NAME IS <span className='text-primary'>MD ARIF HOSSAIN</span></h1>
                        
                        <p class="py-6 home-text text-justify">  I am a professional MERN Stack developer having core expertise in developing high-quality, interactive, pixel-perfect, and responsive web applications using react js. I have 2 years of experience in web development and developed several web applications.I am here to ensure that your project is well done and according to your specifications. Kindly feel free to connect with me on any project so we can get it done</p>
                        <h5 className='about-text py-3'><span className='font-bold text-primary '>Name:</span> Arif Hossain</h5>
                        <h5 className='about-text'><span className='font-bold text-primary '>Profession:</span> Web Developer</h5>
                        <h5 className='about-text py-3'><span className='font-bold text-primary '>Address:</span>  Dinajpur,Bangladesh</h5>
                        <h5 className='about-text'><span className='font-bold text-primary '>Email:</span>  arifhossain68122@gmail.com</h5>
                        <h5 className='about-text my-3'><span className='font-bold text-primary '>Phone:</span>  +08801762931601</h5>
                        <a href='https://drive.google.com/file/d/1slP79nfoFod3Ty6OToA9TGC74oB90jok/view'> <button class="btn btn-outline btn-primary mt-5">Download  Resume</button></a>
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;