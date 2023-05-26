import './layoutstyle.css';
import React from "react";
import Sidebar from "./sidebar";
import RightTool from "./rightbar";
import Logo from '../Components/logo';
import DateAndTime from '../Components/Date';

export default function Layout({children}) {
    return (
        <div id='main'>
            <Sidebar/>
            <div style={{marginTop:'2rem'}}>
                <Logo/>
                <div id='content' style={{height:'78vh'}}>
                    <div >{children}</div>
                    <DateAndTime/>
                </div> 
            </div>
            <RightTool/> 
        </div>
      )
}