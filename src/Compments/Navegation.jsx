import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import logo from '../pucture/logo.svg'
import underline from '../pucture/underline.png'
import menu_open from '../pucture/menu_open.svg'
import menu_close from '../pucture/menu_close.svg'
import './Header.css'


const Navegation = () => {
    const [menu,setMenu] = useState('')
        const menuRef =useRef();
    
        const openMenu = ()=>{
            menuRef.current.style.right="0";
        }
        const closeMenu = ()=>{
            menuRef.current.style.right="-350px";
        }
    return (
        <nav>
            <div className='navbar'>
                <img src={logo} alt="" />
                <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
                <ul ref={menuRef} className="nav-minu">
                    <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close'/>
                    <li><a className='anchor-link' offset={50}><Link to='/'><p onClick={()=>setMenu("home")} style={menu==="home"? {textDecoration: 'underline'} : {textDecoration: 'none'}}>Home</p></Link></a></li>
                    <li><a className='anchor-link' offset={50}><Link to='/About'><p onClick={()=>setMenu("about")} style={menu==="about"? {textDecoration: 'underline'} : {textDecoration: 'none'}}>Abou Me</p></Link></a></li>
                    <li><a className='anchor-link' offset={50}><Link to='/Services'><p onClick={()=>setMenu("service")} style={menu==="service"? {textDecoration: 'underline'} : {textDecoration: 'none'}}>Services</p></Link></a></li>
                    <li><a className='anchor-link' offset={50}><Link to='/Content'><p onClick={()=>setMenu("work")} style={menu==="work"? {textDecoration: 'underline'} : {textDecoration: 'none'}}>Content</p></Link></a></li>
                    <li><a className='anchor-link' offset={50}><Link to='/Contact'><p onClick={()=>setMenu("contact")} style={menu==="contact"? {textDecoration: 'underline'} : {textDecoration: 'none'}}>Contact</p></Link></a></li>
                </ul>
                <div >
                    <ul className="nav-connect">
                        <li onClick={()=>setMenu("")}><Link to='/Login'>Log in</Link></li>
                        <li onClick={()=>setMenu("")}> <Link to='/SingUp'> Sing Up</Link></li>
                    </ul>
                </div>
            </div>
            
        </nav>
    );
} 

export default Navegation;
