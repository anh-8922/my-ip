


import useFetch from "../CustomHooks/useFetch";

export default function DateAndTime(props) {

  const myAPI = process.env.REACT_APP_MY_API

  const {data} = useFetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${myAPI}`);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
  <div>
   
    <p>Local Date:{data.time_zone.current_time}</p>
    <p>Local Time:{data.time_zone.current_time} </p>
    <p>Time Zone Name:{data.time_zone.name}</p>
    <p>Time Zone:{data.time_zone.offset}</p>
  </div>
    
  );
}



