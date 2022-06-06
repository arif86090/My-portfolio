
import React from 'react';
import About from './About';
import Advantage from './Advantage';
import Banner from './Banner';
import Contact from './Contact';
import Myproject from './Myproject';
import Service from './Service';
import Skill from './Skill';
import Summery from './Summery';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <About></About>
          <Service></Service>
          <Skill></Skill>
          <Advantage></Advantage>
          <Myproject></Myproject>
          <Summery></Summery>
          <Contact></Contact>
        </div>
    );
};

export default Home;