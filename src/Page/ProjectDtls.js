import { LinkIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDtls = () => {
    const {id}=useParams();

    const [projects,setProjects]=useState([]);
    useEffect(()=>{
        fetch(`https://serene-everglades-51328.herokuapp.com/project/${id}`)
        .then(res => res.json())
        .then(data =>setProjects(data))
    },[id])
    // const {_id,name,img1,img2,img3,technology,descripation,live}=project;

    return (
        <div className='mt-40  py-5 px-5 '>
          <div className='container m-auto'>
          
              <div className='lg:flex shadow-lg py-6 rounded-lg'>
                  <div className='flex-1 px-5'>
                      <img src={projects.img1} alt='' />
                  </div>
                  <div className='flex-1 px-5'>
                      <h2 className='text-2xl font-bold text-primary mt-3'>{projects.name}</h2>
                      <h4 className='text-1xl font-bold my-3'>Overview:</h4>
                      <p>{projects.descripation}</p>
                      <h4 className='text-1xl font-bold my-3'>Technology:</h4>
                       <div>
                      {projects?.technology?.map(t => <p className='py- '>{t}</p>)}
                      </div>
                     <div className='flex mt-5'>
                      <a href={projects.live} target="_blank"><button className="livebtn btn  btn-primary  mt-3 mr-3">Live Preview <LinkIcon className='live-icon ml-2'></LinkIcon> </button></a>
                      <a href={projects.github} target="_blank"><button className="livebtn btn  btn-primary  mt-3">Github <i className="live-icon ml-2 fa-brands fa-github"></i> </button></a>
                      
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default ProjectDtls;