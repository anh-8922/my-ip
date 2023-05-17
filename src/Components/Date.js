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
    <div id="local-time" style={{color: "#fcfcfc"}}>{DateTime.now().toFormat("HH':'mm ",data.time_zone.current_time)}</div>
    <div id="local-date" style={{color: "#fcfcfc"}}>{DateTime.now().toFormat('MM-dd-yyyy',data.time_zone.current_time)}</div>
    {/*<p>Local Date: {DateTime.now().toFormat('MM-dd-yyyy',data.time_zone.current_time)}</p>*/}
    {/*<p>Local Time: {DateTime.now().toFormat("HH ':' mm ",data.time_zone.current_time)} </p>*/}  
    {/* we can use any time format 24hr or 12 hrs*/}
    {/*<p>Local Time: {DateTime.now().toLocaleString(DateTime.TIME_SIMPLE)}</p>*/}
    <div id="gmt-zone" style={{color: "#fcfcfc"}}>
      GMT Time: {currentGMTTime.toFormat("HH:mm")}<br/>
      Time Zone Name: {data.time_zone.name}<br/>
      Time Zone: {data.time_zone.offset}
    </div>
    {/*<p>GMT Time: {currentGMTTime.toFormat("HH:mm")}</p>*/}
    {/*<p>Time Zone Name: {data.time_zone.name}</p>*/}
    {/*<p>Time Zone: {data.time_zone.offset}</p>*/}
  </div>
    
  );
}


