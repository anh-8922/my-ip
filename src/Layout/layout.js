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
            <div>
                <Logo/>
                <div id='content'>
                    <div>{children}</div>
                    <DateAndTime/>
                </div> 
            </div>
            <RightTool/> 
        </div>
      )
}