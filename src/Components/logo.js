import React from "react";
import {FaSearchLocation} from 'react-icons/fa';
import './css/styles.css';
import '../Mobile/mobilestyle.css';

export default function Logo() {
    return(
        <>
            <p id="logo" >
                just<span><FaSearchLocation/></span>IP</p>
        </>
    )
}