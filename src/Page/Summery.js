import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const Summery = () => {
    return (
        <div className='px-5 mt-20 py-5'>
            <div className='container m-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 mt-10'>
                    <div className='flex justify-center items-center border-2 bg-primary border-primary py-8 px-2'>
                        <div className='summery-icon text-white'><i class="fa-solid fa-user-pen"></i></div>
                       <div className='summery-text text-white'>
                          <h3>02+
                        </h3>
                          <h4>years of experience</h4>
                       </div>
                    </div>
                    <div className='summery-1 flex justify-center items-center border-2 border-primary py-8 px-2'>
                        <div className='summery-icon text-primary'><i class="fa-solid fa-face-smile"></i></div>
                        
                       <div className='summery-text'>
                       
                          <h3> <CountUp end={500} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>+
                       </h3>
                          <h4>Satisfaction clients</h4>
                       </div>
                    </div>
                    <div className='summery-1 flex justify-center items-center border-2 border-primary py-8 px-2'>
                        <div className='summery-icon text-primary'><i class="fa-solid fa-people-roof"></i></div>
                        
                       <div className='summery-text'>
                          <h3> <CountUp end={700} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>+</h3>
                          <h4>clients of worldwide</h4>
                       </div>
                    </div>
                    <div className='summery-1 flex justify-center items-center border-2 border-primary py-8 px-2'>
                        <div className='summery-icon text-primary'><i class="fa-solid fa-square-check"></i></div>
                        
                       <div className='summery-text'>
                          <h3> <CountUp end={1000} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>+</h3>
                          <h4>Projects done</h4>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summery;