import React from 'react'
import './About.css'
import theme_pattern from '../../pucture/theme_pattern.svg'
import profile_img from '../../pucture/about_profile.svg'

export const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="    ">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-write">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, beatae! At, possimus nostrum accusantium quis obcaecati voluptates optio inventore in, quaerat voluptate laudantium excepturi iste. Dolorum accusantium voluptatibus soluta voluptas.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, beatae! At, possimus nostrum accusantium quis obcaecati voluptates optio inventore in, quaerat voluptate laudantium excepturi iste. Dolorum accusantium voluptatibus soluta voluptas.</p>

                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML && CSS</p> <hr style={{width:'50%'}} /></div>
                    <div className="about-skill"><p>React JS</p> <hr style={{width:'70%'}} /></div>
                    <div className="about-skill"><p>JavaScript</p> <hr style={{width:'60%'}} /></div>
                    <div className="about-skill"><p>PHP</p> <hr style={{width:'80%'}} /></div>
                    <div className="about-skill"><p>Python</p> <hr style={{width:'50%'}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievments">
            <div className="about-achievment">
                <h1>6+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>65+</h1>
                <p>PROJECT COMPLATED</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>17+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}
