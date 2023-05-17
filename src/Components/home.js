import React from 'react';
import IpAddress from './IpAddress';
import Card from 'react-bootstrap/Card';
import Map from './Map';
import Logo from './logo';

import './css/styles.css';
export default function Home() {
    return(
        <section id="home" >
            <Logo/>
            <Card id='map'>
                <Card.Header as="h5">Get Map and IP</Card.Header>
                <Card.Body>
                    <Map/>
                </Card.Body>
                <Card.Footer>Your IP Address is:<IpAddress/></Card.Footer>
            </Card>

        </section>
        
    )
}