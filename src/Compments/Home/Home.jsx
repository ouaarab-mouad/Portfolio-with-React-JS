import React from 'react'
import './Home.css'
import profile_img from '../../pucture/profile_img.svg'
import About from '../About/About';
import Services from '../Services/Services';
import Content from '../Content/Content'
import Contact from '../Contact/Contact';
import { div } from 'framer-motion/client';

const Home = () => {
  return (
    <div>
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1> <span>I'm Mouad Ait Ouaarab</span> , Full-Stack developer based in "OFPPT".</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, esse modi. Expedita nulla earum, alias laudantium quae corporis asperiores esse aspernatur maiores quasi et possimus id culpa debitis quos sapiente tempore maxime, voluptate quidem animi odio laboriosam. Rerum, voluptatem maiores.</p>
            <div className="hero-action">
                <div className="hero-connect">
                <a href="https://github.com/ouaarab-mouad">Connect With Me</a>
                </div>
                <div className="hero-resume">
                <a href="https://github.com/ouaarab-mouad"> My Resume </a>
                </div>
            </div>
            
        </div>
        <About/>
        <Services/>
        <Content/>
        <Contact/>
    </div>
  )
}
export default Home;