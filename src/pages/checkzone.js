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
                <Card  style={{ width: '35rem' }}>
                    
                    
                    <CountryData/>
                </Card>
            
                
                
            </div>
        </Layout>
    )
}