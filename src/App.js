
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import About from './Page/About';
import Contact from './Page/Contact';
import Footer from './Page/Footer';
import Home from './Page/Home';
import Myproject from './Page/Myproject';
import Nodata from './Page/Nodata';
import ProjectDtls from './Page/ProjectDtls';

import GoTop from './Page/ScrollToToop';
import Skill from './Page/Skill';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Slider></Slider> */}
      <GoTop scrollStepInPx="70" delayInMs="30"></GoTop>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
         <Route path='about' element={<About></About>}></Route>
         <Route path='skills' element={<Skill></Skill>}></Route>
         <Route path='projects' element={<Myproject></Myproject>}></Route>
         <Route path='contact' element={<Contact></Contact>}></Route>
         <Route path='projectDls/:id' element={<ProjectDtls></ProjectDtls>}></Route>
         <Route path='*' element={<Nodata></Nodata>}></Route>
         
        </Routes>
        <Footer></Footer>
    </div>
  );
}
export default App;
