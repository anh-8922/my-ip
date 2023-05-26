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
    <div style={{ height:'auto', padding: "0"} }>
      <Card id="country-data" 
            style={{ width: 'auto',  height:'auto', margin:'2rem' }}
            // style={{ width: '30rem', height:'60vh' }}
            >        
            <ListGroup className="list-group-flush" style={{padding:'0.7rem', fontSize:'1.2rem'}}>
              <ListGroup.Item style={{ marginTop:'2rem'}}>Capital City: {data.country_capital}</ListGroup.Item>
              <ListGroup.Item >City: {data.city}</ListGroup.Item>
              <ListGroup.Item >Continent: {data.continent_code}</ListGroup.Item>
              <ListGroup.Item >Country Code: {data.country_code2}</ListGroup.Item>
              <ListGroup.Item >Calling Code: {data.calling_code}</ListGroup.Item>
              <ListGroup.Item >Zip Code: {data.zipcode}</ListGroup.Item>
              <ListGroup.Item >Currency Name: {data.currency.name}</ListGroup.Item>
              <ListGroup.Item >Currency Code: {data.currency.code}</ListGroup.Item>
              <ListGroup.Item >Currency Symbol: {data.currency.symbol}</ListGroup.Item>
              
            </ListGroup>
            <div>
              <CountryFlag />
              <div style={{padding:'0.5rem', fontSize:'1.5rem'}}>{data.country_name}</div>
              {/* <div style={{padding:'0.5rem', fontSize:'1.4rem'}}>Calling Code: {data.calling_code}</div> */}
            </div>
      
      </Card>
        
    </div>
    
  );
}