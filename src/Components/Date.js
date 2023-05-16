
import useFetch from "../CustomHooks/useFetch";
const { DateTime } = require('luxon');


export default function DateAndTime(props) {

  const myAPI = process.env.REACT_APP_MY_API
  const currentLocalTime = DateTime.local();
  const currentGMTTime = currentLocalTime.toUTC();

  const {data} = useFetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${myAPI}`);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
  <div>
   
    <p>Local Date: {DateTime.now().toFormat('MM-dd-yyyy',data.time_zone.current_time)}</p>
    <p>Local Time: {DateTime.now().toFormat("HH:mm ",data.time_zone.current_time)}</p>  
    {/* we can use any time format 24hr or 12 hrs*/}
    <p>Local Time: {DateTime.now().toLocaleString(DateTime.TIME_SIMPLE)}</p>
    <p>GMT Time: {currentGMTTime.toFormat("HH:mm")}</p>
    <p>Time Zone Name: {data.time_zone.name}</p>
    <p>Time Zone: {data.time_zone.offset}</p>
  </div>
    
  );
}



