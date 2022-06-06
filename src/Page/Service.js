import React from 'react';
import { ArrowCircleRightIcon, ArrowSmRightIcon, CodeIcon, DesktopComputerIcon, PencilIcon } from '@heroicons/react/solid'


const Service = () => {
    return (
        <div className='px-5'>
        <div className='mt-10 container m-auto py-5 '>
            <div className='text-center my-10'>
                <h2 className='text-3xl font-bold uppercase heading-text'> Services</h2>
                <p className=' mt-2 '>What i offer</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8'>
            <div className=' bg-base-200 p-10 rounded-xl'>
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

                <div className=' bg-base-200 p-10 rounded-xl'>
                <div className='service-icon-bg m-auto'>
                <i className='DesktopComputerIcon '><CodeIcon></CodeIcon></i>
                </div>
                    <h2 className='text-center text-2xl font-bold text-primary mb-10 mt-5'>Frontend Developer</h2>
                    <ul className='services-text'>
                        <li><ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> I develop the user inerface.</li>
                        <li> <ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> Web pages development.</li>
                        <li> <ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> I create ux element interactions.</li>
                        <li> <ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> I position your company brand</li>
                    </ul>
                    <button className="btn btn-outline btn-primary w-full mt-6">View More <span><ArrowSmRightIcon className='w-4  ml-5 btnArrow'></ArrowSmRightIcon></span></button>
                </div>

                <div className=' bg-base-200 p-10 rounded-xl'>
                <div className='service-icon-bg m-auto'>
                <i className='DesktopComputerIcon '><PencilIcon></PencilIcon></i>
                </div>
                    <h2 className='text-center text-2xl font-bold text-primary mb-10 mt-5'>Branding Designer</h2>
                    <ul className='services-text'>
                        <li><ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> I develop the user inerface.</li>
                        <li> <ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> Web pages development.</li>
                        <li> <ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> I create ux element interactions.</li>
                        <li> <ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> I position your company brand</li>
                    </ul>
                    <button className="btn btn-outline btn-primary w-full mt-6">View More <span><ArrowSmRightIcon className='w-4  ml-5 btnArrow'></ArrowSmRightIcon></span></button>
                </div>
                <div className=' bg-base-200 p-10 rounded-xl'>
                <div className='service-icon-bg m-auto'>
                <i className='DesktopComputerIcon '><PencilIcon></PencilIcon></i>
                </div>
                    <h2 className='text-center text-2xl font-bold text-primary mb-10 mt-5'>Branding Designer</h2>
                    <ul className='services-text'>
                        <li><ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> I develop the user inerface.</li>
                        <li> <ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> Web pages development.</li>
                        <li> <ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> I create ux element interactions.</li>
                        <li> <ArrowCircleRightIcon className='w-4 text-primary inline'></ArrowCircleRightIcon> I position your company brand</li>
                    </ul>
                    <button className="btn btn-outline btn-primary w-full mt-6">View More <span><ArrowSmRightIcon className='w-4  ml-5 btnArrow'></ArrowSmRightIcon></span></button>
                </div>
            </div>
        </div>
     </div>
    );
};

export default Service;