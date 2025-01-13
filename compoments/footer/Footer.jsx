import React from 'react'
import './Footer.css'
import footer_logo from '../../pucture/footer_logo.svg'
import user_icon from '../../pucture/user_icon.svg'

export const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div  className="footer-top">
            <div className="footer-top-left">
                <a href=""><img src={footer_logo} alt="" /></a>
                <p>
                    Lorem ipsum dolor sit amet natus nostrum, earum molestiae nam inventore, recusandae laborum rerum ab vel aspernatur suscipit!
                </p>    
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your Email' />
                </div>
                <div className="subscribe">
                    Subscribe
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2024 Mouad Ouaarab. <a href="https://github.com/ouaarab-mouad">All rights resevsd.</a></p>
            <div className="footer-bottom-right">
                <p>Term of services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}
