import React from 'react'
import './Mywork.css'
import  theme_pattern from '../../pucture/theme_pattern.svg'
import mywork_data from '../../pucture/mywork_data'
import arrow_icon from '../../pucture/arrow_icon.svg'


export const Mywork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="work-title">
            <h1>My latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className='work-container'>
            {mywork_data.map((work,index)=>{
                return<div key={index} className='work-formt'>
                    <img src={work.w_img} alt="" />
                </div>

            })}
        </div>
        <a href="https://github.com/ouaarab-mouad">
            <div className="work-showmore">
                <p>Show More</p>
                <img src={arrow_icon}alt="" />
            </div>
        </a>
        
    </div>
  )
}
