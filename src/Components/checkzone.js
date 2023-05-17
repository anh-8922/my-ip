import React from 'react';
import './css/styles.css';
import Card from 'react-bootstrap/Card';
import CountryFlag from './CountryFlag.js';
//import CountryData from './Country';
import Logo from './logo';
import useFetch from "../CustomHooks/useFetch";


export default function CheckZone() {
    const myAPI = process.env.REACT_APP_MY_API

  const {data} = useFetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${myAPI}`);

  if (!data) {
    return <div>Loading...</div>;
  }
    return(
        <section id="zone" >
            <Logo/>
            <div className="paper">
                <div className="lines">
                    <div className="country-data" contenteditable spellcheck="false">
                        You can edit this text! <br /><br />
                        <CountryFlag/><br/>
                        
                        Country: {data.country_name}<br />
                        Capital City: {data.country_capital}<br />
                        City: {data.city}<br />
                        Continent: {data.continent_code}<br />
                        Country Code: {data.country_code2}<br />
                        Calling Code: {data.calling_code}<br />
                        Zip Code: {data.zipcode}<br />
                        Currency Name: {data.currency.name}<br />
                        Currency Code: {data.currency.code}<br />
                        Currency Symbol: {data.currency.symbol}<br />
                    </div>
                </div>
                <div class="holes hole-top"></div>
                <div class="holes hole-middle"></div>
                <div class="holes hole-bottom"></div>
            </div>
           
            
          
        </section>
    )
}