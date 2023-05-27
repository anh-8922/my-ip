import './layoutstyle.css';
import React from "react";
import Sidebar from "./sidebar";
import RightTool from "./rightbar";
import Logo from '../Components/logo';
import DateAndTime from '../Components/Date';
import useMediaQuery from '../CustomHooks/useMediaQuery';
import SidebarMobile from '../Components/Mobile/sidebarmobile';
import '../Components/Mobile/mobilestyle.css';
import TimeMobile from '../Components/timemobile';

export default function Layout({children}) {
    const isDesktop = useMediaQuery();
    const isLogo = useMediaQuery();
    return (
        <div id='main'>
            {isDesktop ? <Sidebar/> : <SidebarMobile/> }
            <div isDesktop={isDesktop}></div>
            <div style={{padding: "0"}}>
                <div id="logolayout"><Logo /></div>
                <div id='content'>
                    <div >{children}</div>
                    {isLogo ? <DateAndTime/> : <TimeMobile/>}
                    <div isLogo = {isLogo}></div>
                </div> 
            </div>
            <RightTool/> 
        </div>
      )
}