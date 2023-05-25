import React from 'react';
import './pages.css';
import CountryFlag from '../Components/CountryFlag.js';
import CountryData from '../Components/Country';
import Layout from '../Layout/layout';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function CheckZone() {
    return(
        <Layout>
            <div id="zone">
                <Card id='zone-card' style={{ width: '40rem' }}>
                    <div><CountryFlag/></div>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                      
                    </Card.Body>
                    <CountryData/>
                </Card>
            
                
                
            </div>
        </Layout>
    )
}