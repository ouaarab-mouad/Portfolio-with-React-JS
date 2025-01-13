import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../pucture/logo.svg'
import underline from '../../pucture/nav_underline.svg'
import menu_open from '../../pucture/menu_open.svg'
import menu_close from '../../pucture/menu_close.svg'

export const Navbar = () => {
  const [menu,setMenu] = useState('')
  const menuRef =useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu = ()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
        <ul ref={menuRef} className="nav-minu">
          <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close'/>
            <li><a className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p></a>{menu==="home"? <img src={underline} alt=""/>:<></>}</li>
            <li><a className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>Abou Me</p></a>{menu==="about"? <img src={underline} alt=""/>:<></>}</li>
            <li><a className='anchor-link' offset={50} href='#service'><p onClick={()=>setMenu("service")}>Services</p></a>{menu==="service"? <img src={underline} alt=""/>:<></>}</li>
            <li><a className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></a>{menu==="work"? <img src={underline} alt=""/>:<></>}</li>
            <li><a className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></a>{menu==="contact"? <img src={underline} alt=""/>:<></>}</li>
        </ul>
        <div className="nav-connect"><a href="https://github.com/ouaarab-mouad">Connect With Me</a></div>
    </div>
  )
}
