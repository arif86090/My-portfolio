
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import About from './Page/About';
import Footer from './Page/Footer';
import Home from './Page/Home';
import GoTop from './Page/ScrollToToop';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Slider></Slider> */}
      <GoTop scrollStepInPx="70" delayInMs="30"></GoTop>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
         <Route path='/about' element={<About></About>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}
export default App;
