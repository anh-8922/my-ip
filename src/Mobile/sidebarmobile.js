import {Link } from "react-router-dom";
import './mobilestyle.css';
import {ImLocation2} from 'react-icons/im';
import React, { useState } from "react";
import {AiOutlineGlobal} from 'react-icons/ai';
import Logo from "../Components/logo";

export default function SidebarMobile() {
    return (
        <>
            <nav id="top-bar">
                <Logo/>                                                   
                <Link to="/"  className='nav-mobile'><ImLocation2 className="nav-icons"/>LOCATION</Link>
                <Link to="/checkzone"  className="nav-mobile"><AiOutlineGlobal className="nav-icons"/>COUNTRY</Link>                                                                            
            </nav>
            
            
        </>
      )

}