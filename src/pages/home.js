import React from 'react';
import IpAddress from '../Components/IpAddress';
import Card from 'react-bootstrap/Card';
import Map from '../Components/Map';
import Layout from '../Layout/layout';
import './pages.css';

export default function Home() {
    return(
        <Layout >
            
            <Card id='map'>
                <Card.Header as="h5">Get Map and IP</Card.Header>
                <Card.Body>
                    <Map/>
                </Card.Body>
                <Card.Footer style={{textAlign: "center", fontSize: "1.5rem", paddingTop: "0"}}>
                    Your IP Address is:<span style={{fontSize: "2.5rem"}}><IpAddress/></span>
                </Card.Footer>
            </Card>

        </Layout>
        
    )
}