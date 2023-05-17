
import useFetch from "../CustomHooks/useFetch";

export default function CountryFlag(props) {

  const myAPI = process.env.REACT_APP_MY_API

  const {data} = useFetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${myAPI}`);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
  <img src={data.country_flag} alt='Country Flag'/>
    
  );

}

