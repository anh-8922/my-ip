import React from 'react';
import IpAddress from './IpAddress';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Map from './Map';

import './css/styles.css';
export default function Home() {
    return(
        <section id="home" >
            <div>LOGO</div>
            <Card id='map'>
                <Card.Header as="h5">Get Map</Card.Header>
                <Card.Body>
                    <Map/>
                </Card.Body>
            </Card>
            <Card className="text-center" bg={"white"}>
                <Card.Header as="h5">Get my IP</Card.Header>
                <Card.Body>
                    <Card.Title>Your IP Address is:</Card.Title>
                    <Card.Text>
                        <IpAddress/>
                    </Card.Text>
                    
                </Card.Body>
                
            </Card>
          
        </section>
        
    )
}