import React from 'react';
import './pages.css';
import CountryData from '../Components/Country';
import Layout from '../Layout/layout';
import Card from 'react-bootstrap/Card';

export default function CheckZone() {
    return(
        <Layout>
            <div id="zone" >
                <Card  style={{ width: '42rem', height: '100%', padding: "0"}}>  
                    <CountryData />
                </Card>
            </div>
        </Layout>
    )
}