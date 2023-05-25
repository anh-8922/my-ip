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
    <div>
      <Card id="country-data" style={{ width: 'fit-content' }}>        
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Capital City: {data.country_capital}</ListGroup.Item>
              <ListGroup.Item>City: {data.city}</ListGroup.Item>
              <ListGroup.Item>Continent: {data.continent_code}</ListGroup.Item>
              <ListGroup.Item>Country Code: {data.country_code2}</ListGroup.Item>
              <ListGroup.Item>Zip Code: {data.zipcode}</ListGroup.Item>
              <ListGroup.Item>Currency Name: {data.currency.name}</ListGroup.Item>
              <ListGroup.Item>Currency Code: {data.currency.code}</ListGroup.Item>
              <ListGroup.Item>Currency Symbol: {data.currency.symbol}</ListGroup.Item>
            </ListGroup>
            <div>
              <CountryFlag/>
              <div>{data.country_name}</div>
              <div>Calling Code: {data.calling_code}</div>
            </div>
      
      </Card>
        
    </div>
    
  );
}