import useFetch from "../CustomHooks/useFetch";
import './mobilestyle.css';

const { DateTime } = require('luxon');


export default function TimeMobile(props) {

  const myAPI = process.env.REACT_APP_MY_API
  const currentLocalTime = DateTime.local();
  const currentGMTTime = currentLocalTime.toUTC();

  const {data} = useFetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${myAPI}`);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
      <div className="mobile-time">
        <div id="time-block">
          <p id="time">{DateTime.now().toFormat("HH':'mm ",data.time_zone.current_time)}</p>
         
        </div>
                        
        <div id="time-info">
          Date: <span>{DateTime.now().toFormat('MM-dd-yyyy',data.time_zone.current_time)}</span><br/>
          GMT Time: <span>{currentGMTTime.toFormat("HH:mm")}</span><br/>
          Zone Name: <span>{data.time_zone.name}</span><br/>
          Time Zone: <span>{data.time_zone.offset}</span>
        </div>
      </div>

  );
}


