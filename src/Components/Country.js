import useFetch from "../CustomHooks/useFetch";

export default function CountryData(props) {

  const myAPI = process.env.REACT_APP_MY_API

  const {data} = useFetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${myAPI}`);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <p>Country: {data.country_name}</p>
        <p>Capital City: {data.country_capital}</p>
        <p>City: {data.city}</p>
        <p>Continent: {data.continent_code}</p>
        <p>Country Code: {data.country_code2}</p>
        <p>Calling Code: {data.calling_code}</p>
        <p>Zip Code: {data.zipcode}</p>
        <p>Currency Name: {data.currency.name}</p>
        <p>Currency Code: {data.currency.code} </p>
        <p>Currency Symbol: {data.currency.symbol} </p>
    </div>
    
  );
}