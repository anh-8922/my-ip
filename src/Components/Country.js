import useFetch from "../CustomHooks/useFetch";
import '.css/styles.css';

export default function CountryData(props) {

  const myAPI = process.env.REACT_APP_MY_API

  const {data} = useFetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${myAPI}`);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div >
        <p className="country-data">Country: {data.country_name}</p>
        <p className="country-data">Capital City: {data.country_capital}</p>
        <p className="country-data">City: {data.city}</p>
        <p className="country-data">Continent: {data.continent_code}</p>
        <p className="country-data">Country Code: {data.country_code2}</p>
        <p className="country-data">Calling Code: {data.calling_code}</p>
        <p className="country-data">Zip Code: {data.zipcode}</p>
        <p className="country-data">Currency Name: {data.currency.name}</p>
        <p className="country-data">Currency Code: {data.currency.code} </p>
        <p className="country-data">Currency Symbol: {data.currency.symbol} </p>
    </div>
    
  );
}