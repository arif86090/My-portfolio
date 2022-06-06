import React, { useEffect, useState } from 'react';
import Projects from './Projects';

const Myproject = () => {

    const [projects,setProjects]=useState([])

    useEffect(()=>{
        fetch('project.json')
        .then(res => res.json())
        .then(data =>setProjects(data))

    },[])
   



    return (
        <div className='py-5 mt-10 px-5'>
            <div className='container m-auto' >
                <div className='text-center mt-10'>
                    <h2 className='text-3xl font-bold uppercase mt-20 heading-text'> My projects</h2>
                </div>
                <div className='mt-20'>
                    <div  className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8'>
                        {
                            projects.map(project => <Projects
                            key={project._id}
                            project={project}
                            ></Projects>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myproject;