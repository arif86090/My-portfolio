import React from 'react';
import figma from '../images/figma.png'
import psd from '../images/psd.png'
import ps from '../images/ps.png'


const Advantage = () => {
    return (
        <div className='mt-10 py-5 px-5 container m-auto'>
          <div className='text-center mt-10 mb-20'>
                <h2 className='text-3xl font-bold uppercase heading-text'> My Advantage</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 '>
                <div>
                    <div className='bg-primary py-8 px-4 text-center rounded-lg'>
                        <div className='addvanteg-logo  m-auto bg-base-200'>
                        <img src={figma} className='w-8 h-8' alt="" />
                        </div>
                        <h2 className='text-5xl mt-5 font-bold'>70%</h2>
                    </div>
                    <h3 className='mt-3 text-center text-3xl'>Figma</h3>
                </div>
                <div>
                    <div className='bg-primary py-8 px-4 text-center rounded-lg'>
                        <div className='addvanteg-logo  m-auto bg-base-200'>
                        <img src={psd} className='w-8 h-8' alt="" />
                        </div>
                        <h2 className='text-5xl mt-5 font-bold'>90%</h2>
                    </div>
                    <h3 className='mt-3 text-center text-3xl '>Psd to Html</h3>
                </div>
                <div>
                    <div className='bg-primary py-8 px-4 text-center rounded-lg'>
                        <div className='addvanteg-logo  m-auto bg-base-200'>
                        <img src={ps} className='w-16 h-8' alt="" />
                        </div>
                        <h2 className='text-5xl mt-5 font-bold'>50%</h2>
                    </div>
                    <h3 className='mt-3 text-center text-3xl '>Photoshop</h3>
                </div>

            </div>
        </div>
    );
};

export default Advantage;