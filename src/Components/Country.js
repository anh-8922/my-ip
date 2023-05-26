import useFetch from "../CustomHooks/useFetch";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CountryFlag from "./CountryFlag";
import "./css/styles.css";

export default function CountryData(props) {

  const myAPI = process.env.REACT_APP_MY_API

  const {data} = useFetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${myAPI}`);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height:'50vh', marginTop:'3rem'} }>
      <Card id="country-data" 
            style={{ width: 'fit-content' }}
            // style={{ width: '30rem', height:'60vh' }}
            >        
            <ListGroup className="list-group-flush" >
              <ListGroup.Item style={{padding:'0.8rem', fontSize:'1.5rem', marginTop:'2rem'}}>Capital City: {data.country_capital}</ListGroup.Item>
              <ListGroup.Item style={{padding:'0.8rem', fontSize:'1.5rem', margin:'0'}}>City: {data.city}</ListGroup.Item>
              <ListGroup.Item style={{padding:'0.8rem', fontSize:'1.5rem', margin:'0'}}>Continent: {data.continent_code}</ListGroup.Item>
              <ListGroup.Item style={{padding:'0.8rem', fontSize:'1.5rem', margin:'0'}}>Country Code: {data.country_code2}</ListGroup.Item>
              <ListGroup.Item style={{padding:'0.8rem', fontSize:'1.5rem', margin:'0'}}>Zip Code: {data.zipcode}</ListGroup.Item>
              <ListGroup.Item style={{padding:'0.8rem', fontSize:'1.5rem', margin:'0'}}>Currency Name: {data.currency.name}</ListGroup.Item>
              <ListGroup.Item style={{padding:'0.8rem', fontSize:'1.5rem', margin:'0'}}>Currency Code: {data.currency.code}</ListGroup.Item>
              <ListGroup.Item style={{padding:'0.8rem', fontSize:'1.5rem', margin:'0'}}>Currency Symbol: {data.currency.symbol}</ListGroup.Item>
            </ListGroup>
            <div>
              <CountryFlag />
              <div style={{padding:'0.5rem', fontSize:'1.5rem'}}>{data.country_name}</div>
              <div style={{padding:'0.5rem', fontSize:'1.5rem'}}>Calling Code: {data.calling_code}</div>
            </div>
      
      </Card>
        
    </div>
    
  );
}