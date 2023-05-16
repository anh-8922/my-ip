import React from 'react';
import './css/styles.css';
import Card from 'react-bootstrap/Card';
import CountryFlag from './CountryFlag.js';
import CountryData from './Country';
import DateAndTime from './Date';


export default function CheckZone() {
    return(
        <section id="home" >
            <Card id='map'>
                <Card.Header as="h5">Get Map</Card.Header>
                <Card.Body>
                    <CountryFlag/><DateAndTime/>
                </Card.Body>
            </Card>
            <Card className="text-center" bg={"white"}>
                <Card.Header as="h5">Get my IP</Card.Header>
                <Card.Body>
                    <Card.Title>Your IP Address is:</Card.Title>
                    <Card.Text>
                        <CountryData/>
                    </Card.Text>
                    
                </Card.Body>
                
            </Card>
          
        </section>
    )
}