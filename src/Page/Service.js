import React from 'react';
import { ArrowCircleRightIcon, ArrowSmRightIcon, CodeIcon, DesktopComputerIcon, PencilIcon, TableIcon } from '@heroicons/react/solid'


const Service = () => {
    return (
        <div className='px-5'>
        <div className='mt-10 container m-auto py-5 '>
            <div className='text-center my-10'>
                <h2 className='text-3xl font-bold uppercase heading-text'> Services</h2>
                <p className=' mt-2 '>What i offer</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8'>
            <div className=' bg-base-200 p-5 lg:p-10 rounded-xl'>
                <div className='service-icon-bg m-auto'>
                <i className='DesktopComputerIcon '><DesktopComputerIcon className=""/></i>
                </div>
                    <h2 className='text-center text-2xl font-bold text-primary mb-10 mt-5'>Ui/Ux Designer</h2>
                    <ul className='services-text'>
                        <li><ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> I develop the user inerface.</li>
                        <li> <ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> Web pages development.</li>
                        <li> <ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> I create ux element interactions.</li>
                        <li> <ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> I position your company brand</li>
                    </ul>
                    <button className="btn btn-outline btn-primary w-full mt-6">View More <span><ArrowSmRightIcon className='w-4  ml-5 btnArrow'></ArrowSmRightIcon></span></button>
                </div>

                <div className=' bg-base-200 p-5 lg:p-10 rounded-xl'>
                <div className='service-icon-bg m-auto'>
                <i className='DesktopComputerIcon '><CodeIcon></CodeIcon></i>
                </div>
                    <h2 className='text-center text-2xl font-bold text-primary mb-10 mt-5'>Frontend Developer</h2>
                    <ul className='services-text'>
                        <li><ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> I will design according to your needs</li>
                        <li> <ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> Use the necessary languages</li>
                        <li> <ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> I use react-js for frontend </li>
                        <li> <ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon>  
                        Try to create a beautiful layout.</li>
                    </ul>
                    <button className="btn btn-outline btn-primary w-full mt-6">View More <span><ArrowSmRightIcon className='w-4  ml-5 btnArrow'></ArrowSmRightIcon></span></button>
                </div>

                <div className=' bg-base-200 p-5 lg:p-10 rounded-xl'>
                <div className='service-icon-bg m-auto'>
                <i className='DesktopComputerIcon '><PencilIcon></PencilIcon></i>
                </div>
                    <h2 className='text-center text-2xl font-bold text-primary mb-10 mt-5'>Branding Designer</h2>
                    <ul className='services-text'>
                        <li><ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> Design is an important part .</li>
                        <li> <ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> The front-end developer determines where to place images and icons</li>
                        <li> <ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> I use best color and font for website</li>
                        <li> <ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> I make beautiful design .</li>
                    </ul>
                    <button className="btn btn-outline btn-primary w-full mt-6">View More <span><ArrowSmRightIcon className='w-4  ml-5 btnArrow'></ArrowSmRightIcon></span></button>
                </div>
                <div className=' bg-base-200 p-5 lg:p-10 rounded-xl '>
                <div className='service-icon-bg m-auto'>
                <i className='DesktopComputerIcon '><TableIcon></TableIcon></i>
                </div>
                    <h2 className='text-center text-2xl font-bold text-primary mb-10 mt-5'>Landing Pages</h2>
                    <ul className='services-text'>
                        <li><ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> Optimizing landing pages for conversions</li>
                        <li> <ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> Create must-click destinations</li>
                        <li> <ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> Lead generation landing pages.</li>
                        <li> <ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> Building SEO-friendly</li>
                    </ul>
                    <button className="btn btn-outline btn-primary w-full mt-6 ">View More <span><ArrowSmRightIcon className='w-4  ml-5 btnArrow'></ArrowSmRightIcon></span></button>
                </div>
            </div>
        </div>
     </div>
    );
};

export default Service;