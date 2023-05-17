import { Outlet, Link } from "react-router-dom";
import './css/styles.css';
import {AiTwotoneHome} from 'react-icons/ai/';
import {ImLocation2} from 'react-icons/im';
import{AiOutlineMenuUnfold} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
import {BsFillShareFill} from 'react-icons/bs';
import React, { useState } from "react";
import Info from "./rightBar/info";
import Contact from "./rightBar/contact";
import {AiOutlineGlobal} from 'react-icons/ai';
import Card from 'react-bootstrap/Card';
import DateAndTime from "./Date";

export default function Layout() {
   
    //const [click, setClick] = useState(false);

    const [slide, setSlide] = useState(true);


    return (
        <>
            <nav className={slide ? 'side-bar' : 'side-bar-XL'}>
                <Link activeClassName="active" id='menu'><AiOutlineMenuUnfold className="icons" onClick = {() => setSlide(!slide)} /></Link>
                <div id="nav-bar">
                    
                    
                    
                    <Link to="/" activeClassName="active" className='nav-items'><AiTwotoneHome className="icons"/>{slide?"":<p className='items-extended'>Home</p>}</Link>
                    
                   
                    <Link to="checkip" activeClassName="active" className='nav-items'><ImLocation2 className="icons"/>{slide?"":<p className='items-extended'>What's my IP?</p>}</Link>
                    <Link to="checkzone" activeClassName="active" className="nav-items"><AiOutlineGlobal className="icons"/>{slide?"":<p className='items-extended'>Check Zone</p>}</Link>
                
                    
                    
                    
                </div>
                
            </nav>
            
            <Outlet />
            
            <div className="local-time">
                <Card border="danger" style={{ width: '15rem' }}>
                    
                    <Card.Body>
                        <Card.Title style={{ height: '1rem' }}>Local Time & Date</Card.Title>
                        <Card.Text>
                            <DateAndTime/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div id="right-tool">
                <Contact/>
                <a href="https://github.com/anh-8922/my-ip" target="_blank"><BsGithub className="tool-items"/></a>
                
                <Info/>
                <Link><BsFillShareFill className="tool-items" /> </Link>
                
            </div>
            
        </>
      )

}