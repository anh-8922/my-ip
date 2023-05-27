import {Link } from "react-router-dom";
import './mobilestyle.css';
import {ImLocation2} from 'react-icons/im';
import{AiOutlineMenuUnfold} from 'react-icons/ai';
import React, { useState } from "react";
import {AiOutlineGlobal} from 'react-icons/ai';
import Logo from "../logo";

export default function SidebarMobile() {
    return (
        <>
            <nav id="top-bar">
                <Logo/>                                                   
                <Link to="/"  className='nav-items'><ImLocation2 className="icons"/>LOCATION</Link>
                <Link to="/checkzone"  className="nav-items"><AiOutlineGlobal className="icons"/>COUNTRY</Link>                                                                            
            </nav>
            
            
        </>
      )

}