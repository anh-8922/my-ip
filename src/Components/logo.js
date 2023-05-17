import React from "react";
import {FaSearchLocation} from 'react-icons/fa';
export default function Logo() {
    return(
        <>
            <p id="logo" 
            style={{
                fontFamily: "'Mogra', cursive",
                fontSize: "3rem",
                color: "#D0A772",
                
            }}>
                just<span><FaSearchLocation/></span>IP</p>
        </>
    )
}