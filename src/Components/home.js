import React from 'react';
import IpAddress from './IpAddress';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './css/styles.css';
export default function Home() {
    return(
        <section id="home" >
            <Card className="text-center" bg={"white"}>
                <Card.Header>Hi, what is my IP address?</Card.Header>
                <Card.Body>
                    <Card.Title>Your IP Address is:</Card.Title>
                    <Card.Text>
                        <IpAddress/>
                    </Card.Text>
                    <Button variant="primary">Copy it</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Check IP Address</Card.Footer>
            </Card>
        </section>
        
    )
}