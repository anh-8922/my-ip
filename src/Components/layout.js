import { Outlet, Link } from "react-router-dom";
import './css/styles.css';
import {AiTwotoneHome} from 'react-icons/ai/';
import {ImLocation2} from 'react-icons/im';
import {RiAccountPinCircleFill} from 'react-icons/ri';
import{AiOutlineMenuUnfold} from 'react-icons/ai';
import {RiLogoutBoxRFill} from 'react-icons/ri';
import React, { useState } from "react";
import Login from "./login";
export default function Layout() {
    //const [click, setClick] = useState(false);
    const [slide, setSlide] = useState(false);
    return (
        <>
            <nav className={slide ? 'side-bar' : 'side-bar-XL'}>
                <Link activeClassName="active" id='menu'><AiOutlineMenuUnfold className="icons" onClick = {() => setSlide(!slide)} /></Link>
                <div id="nav-bar">
                    
                    
                    
                    <Link to="/" activeClassName="active" className='nav-items'><AiTwotoneHome className="icons"/>{slide?"":<p className='items-extended'>Home</p>}</Link>
                    
                   
                    <Link to="checkip" activeClassName="active" className='nav-items'><ImLocation2 className="icons"/>{slide?"":<p className='items-extended'>What's my IP?</p>}</Link>
                    
                
                    
                    <Link to="/" activeClassName="active" className='nav-items'><Login className="icons"/>{slide?"":<p className='items-extended'>Login</p>}</Link>
                    
                </div>
                <Link activeClassName="active" id='clear'><RiLogoutBoxRFill className="icons"/></Link>
            </nav>
            
            <Outlet />
            
            
        </>
      )

}