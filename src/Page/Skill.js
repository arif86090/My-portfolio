import React from 'react';
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import html from '../images/html.png'
import css from '../images/css.png'
import b from '../images/b.png'
import t from '../images/t.png'
import react from '../images/react.png'
import node from '../images/node.png'
import express from '../images/express.png'
import mongo from '../images/mongo.png'
const Skill = () => {
    const config1 = {
        percent: 95,
        colorSlice: "#45ccb8",
        colorCircle: "#E6E6E6",
        fontWeight:"bold",
        fontSize: "1rem",
        textPosition: "0.5em" 
    // needed element to move the percentage animation lower
      };
      const config2 = {
        percent: 80,
        colorSlice: "#45ccb8",
        colorCircle: "#E6E6E6",
       
        fontSize: "1rem",
        fontWeight:"bold",
        textPosition: "0.5em" 
   
      };
      const config3 = {
        percent: 85,
        colorSlice: "#45ccb8",
        colorCircle: "#E6E6E6",
       
        fontSize: "1rem",
        fontWeight:"bold",
        textPosition: "0.5em" 
   
      };
      const config4 = {
        percent: 75,
        colorSlice: "#45ccb8",
        colorCircle: "#E6E6E6",
        fontSize: "1rem",
        fontWeight:"bold",
        textPosition: "0.5em" 
   
      };
      const config5 = {
        percent: 80,
        colorSlice: "#45ccb8",
        colorCircle: "#E6E6E6",
        fontSize: "1rem",
        fontWeight:"bold",
        textPosition: "0.5em" 
   
      };
      const config6 = {
        percent: 60,
        colorSlice: "#45ccb8",
        colorCircle: "#E6E6E6",
        fontSize: "1rem",
        fontWeight:"bold",
        textPosition: "0.5em" 
   
      };
      const config7 = {
        percent: 70,
        colorSlice: "#45ccb8",
        colorCircle: "#E6E6E6",
        fontSize: "1rem",
        fontWeight:"bold",
        textPosition: "0.5em" 
   
      };
      const config8 = {
        percent: 90,
        colorSlice: "#45ccb8",
        colorCircle: "#E6E6E6",
        fontSize: "1rem",
        fontWeight:"bold",
        textPosition: "0.5em" 
   
      };
    return (
        <div className='mt-10 py-5'>

           <div className='container m-auto'>
           <div className='text-center mt-10'>
                <h2 className='text-3xl font-bold uppercase heading-text'> Skills</h2>
                <p className=' mt-2 '>My Technical</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20'>
                <div className='m-auto shadow-xl py-5 px-10'>
                <CircularProgressBar   {...config1}></CircularProgressBar>
                <div className='flex justify-center items-center mt-5'>
                    <img src={html} className='w-12  h-10' alt=''/>
                    <h2 className='text-center font-bold text-2xl'>HTML</h2>
                </div>
                </div>
                <div className='m-auto shadow-xl py-5 px-10'>
                <CircularProgressBar   {...config2}></CircularProgressBar>
                <div className='flex justify-center items-center mt-5'>
                    <img src={css} className='w-8  h-8' alt=''/>
                    <h2 className='text-center font-bold text-2xl'>CSS</h2>
                </div>
                </div>
                <div className='m-auto shadow-xl py-5 px-10'>
                <CircularProgressBar   {...config3}></CircularProgressBar>
                <div className='flex justify-center items-center mt-5'>
                    <img src={b} className='w-8  h-8' alt=''/>
                    <h2 className='text-center font-bold text-2xl ml-2'>BOOTSTRAP</h2>
                </div>
                </div>
                <div className='m-auto shadow-xl py-5 px-10'>
                <CircularProgressBar   {...config4}></CircularProgressBar>
                <div className='flex justify-center items-center mt-5'>
                    <img src={t} className='w-8  h-8' alt=''/>
                    <h2 className='text-center font-bold text-2xl uppercase ml-2'>tailwind</h2>
                </div>

                </div> 
                <div className='m-auto shadow-xl py-5 px-10'>
                <CircularProgressBar   {...config5}></CircularProgressBar>
                <div className='flex justify-center items-center mt-5'>
                    <img src={react} className='w-8  h-8' alt=''/>
                    <h2 className='text-center font-bold text-2xl uppercase ml-2'>react js</h2>
                </div>
                </div> 
                <div className='m-auto shadow-xl py-5 px-10'>
                <CircularProgressBar   {...config6}></CircularProgressBar>
                <div className='flex justify-center items-center mt-5'>
                    <img src={node} className='w-8  h-8' alt=''/>
                    <h2 className='text-center font-bold text-2xl uppercase ml-2'>node js</h2>
                </div>
                </div>
                <div className='m-auto shadow-xl py-5 px-10'>
                <CircularProgressBar   {...config7}></CircularProgressBar>
                <div className='flex justify-center items-center mt-5'>
                    <img src={express} className='w-8  h-8' alt=''/>
                    <h2 className='text-center font-bold text-2xl uppercase ml-2'>Express js</h2>
                </div>
                </div>
                <div className='m-auto shadow-xl py-5 px-10'>
                <CircularProgressBar   {...config8}></CircularProgressBar>
                <div className='flex justify-center items-center mt-5'>
                    <img src={mongo} className='w-8  h-8' alt=''/>
                    <h2 className='text-center font-bold text-2xl uppercase ml-2'>mongo DB</h2>
                </div>
                </div>
               
               
            </div>
           </div>
            
        </div>
    );
};

export default Skill;