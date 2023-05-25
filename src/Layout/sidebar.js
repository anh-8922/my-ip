import { Outlet, Link } from "react-router-dom";
import './layoutstyle.css';
import {AiTwotoneHome} from 'react-icons/ai/';
import {ImLocation2} from 'react-icons/im';
import{AiOutlineMenuUnfold} from 'react-icons/ai';
import React, { useState } from "react";
import {AiOutlineGlobal} from 'react-icons/ai';
import Card from 'react-bootstrap/Card';
import DateAndTime from "../Components/Date";

export default function Sidebar() {
    const [slide, setSlide] = useState(true);


    return (
        <>
            <nav className={slide ? 'side-bar' : 'side-bar-XL'}>
                <Link activeClassName="active" id='menu'><AiOutlineMenuUnfold className="icons" onClick = {() => setSlide(!slide)} /></Link>
                <div id="nav-bar">                                         
                    <Link to="/" activeClassName="active" className='nav-items'><AiTwotoneHome className="icons"/>{slide?"":<p className='items-extended'>HOME</p>}</Link>                                    
                    <Link to="checkip" activeClassName="active" className='nav-items'><ImLocation2 className="icons"/>{slide?"":<p className='items-extended'>LOCATION</p>}</Link>
                    <Link to="checkzone" activeClassName="active" className="nav-items"><AiOutlineGlobal className="icons"/>{slide?"":<p className='items-extended'>COUNTRY</p>}</Link>                                                                         
                </div>
            </nav>
            <Outlet />
            
        </>
      )

}