import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png'

const Footer = () => {
    return (
        <div className='mt-40 py-5 bg-base-200 footer-container' >
             <div class="waves ">
                <div class="wave" id="wave1"></div>
                <div class="wave" id="wave2"></div>
                <div class="wave" id="wave3"></div>
                <div class="wave" id="wave4"></div>
            </div>
            <div className='container m-auto'>
                <div>
                <footer class="footer p-10  text-base-content">
                        <div className='py-3'>
                        {/* <img src={logo} className='w-full ' alt="logo"/> */}
                        <Link to='/'>  <img src={logo} className='footer-logo'  alt="" /></Link>
                        </div> 
                        <div>
                            <h4 className='footer-header font-bold text-primary  uppercase'>explore</h4>
                            <ul className='footer-text'>
                            <li className=''><NavLink to='/'>Home</NavLink></li>
                            <li className=''><NavLink to='/'>About</NavLink></li>
                            <li className=''><NavLink to='/'>Service</NavLink></li>
                            <li className=''><NavLink to='/'>Project</NavLink></li>
                                
                            </ul>
                        </div> 
                        <div>
                        <h4 className='footer-header font-bold text-primary  uppercase'>Services</h4>
                            <ul className='footer-text'>
                                <li>Ui/Ux Designer</li>
                                <li>Frontend Developer</li>
                                <li>Backend Developer</li>
                                <li>Landing Page</li>
                            </ul>
                        </div> 
                        <div>
                        <h4 className='footer-header font-bold text-primary  uppercase'>Follow</h4>
                        <ul className='footer-text'>
                                <li><a href=''>Facebook</a></li>
                                <li><a href=''>Twitter</a></li>
                                <li><a href=''>Linkedin</a></li>
                               
                            </ul>
                        </div>
                       
                 </footer>
                 <div className='text-center pt-6'>
                            <p>Copyright © 2022 - All right <span className='font-bold text-primary'>Arif Hossain</span></p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;