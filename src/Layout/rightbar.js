import { Link } from "react-router-dom";
import './layoutstyle.css';
import {BsGithub} from 'react-icons/bs';
// import {BsFillShareFill} from 'react-icons/bs';
import React from "react";
import Info from "../Components/rightBar/info";
import Contact from "../Components/rightBar/contact";
import SocialMedia from "../Components/rightBar/share";


export default function RightTool() {
    return (
        <div id="right-tool">
            <Contact/>
            <a  rel="noreferrer" href="https://github.com/anh-8922/my-ip" target="_blank"><BsGithub className="tool-items"/></a>
            <Info/>
            <SocialMedia/>
        </div>
    )
}