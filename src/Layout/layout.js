import './layoutstyle.css';
import React from "react";
import Sidebar from "./sidebar";
import RightTool from "./rightbar";
import Logo from '../Components/logo';
import DateAndTime from '../Components/Date';
import useMediaQuery from '../CustomHooks/useMediaQuery';
import SidebarMobile from '../Mobile/sidebarmobile';
import './mobile.css';
import TimeMobile from '../Mobile/timemobile';

export default function Layout({children}) {
    const isDesktop = useMediaQuery();
    const isLogo = useMediaQuery();
    return (
        <div id='main'>
            {isDesktop ? <Sidebar/> : <SidebarMobile/> }
            <div isDesktop={isDesktop}></div>
            <div id='middle'>
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