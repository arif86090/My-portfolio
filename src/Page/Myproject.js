import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Preloder from './Preloder';
import Projects from './Projects';

const Myproject = () => {

    const [projects,setProjects]=useState([]);
    const [preloder,setPreloder]=useState(true);

    useEffect(() => {
      const getdata = async () =>{
        const {data}=await axios.get('https://serene-everglades-51328.herokuapp.com/project');
        setProjects(data)
        setPreloder(false);
      }
      getdata();
        
    },[])



    return (
        <div className='py-5 mt-10 px-5'>
            <div className='container m-auto' >
               
                <div className='text-center mt-10'>
                    <h2 className='text-3xl font-bold uppercase mt-20 heading-text'> My projects</h2>
                </div>
                <div className='mt-5'>{preloder && <Preloder></Preloder>}</div>
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
               <div className='m-auto text-center mt-10'>
                  <Link to='/allProject'>
                  <button className='btn btn-outline btn-primary'>See All Projects</button>
                  </Link>
              
               </div>
            </div>
        </div>
    );
};

export default Myproject;