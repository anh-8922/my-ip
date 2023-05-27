import React from "react";
import {FaSearchLocation} from 'react-icons/fa';
import '../Components/Mobile/mobilestyle.css';
import './css/styles.css';
export default function Logo() {
    return(
        <div style={{marginBottom: "1rem"}}>
            <p id="logo">
                just<span><FaSearchLocation/></span>IP
            </p>
        </div>
    )
}