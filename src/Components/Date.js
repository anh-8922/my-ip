import Card from 'react-bootstrap/Card';
import useFetch from "../CustomHooks/useFetch";
import './css/styles.css';

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
      <div className="local-time">
                <Card style={{ 
                width: '16rem', 
                height: "fit-content", 
                borderRadius: "1rem", 
                backgroundColor: "#E6C896" }}>
                    <Card.Body style={{background: "none"}}>
                        <Card.Title style={{ 
                        height: '1rem', 
                        color: "#332014",
                        letterSpacing: "1px",
                        margin: "0" }}>
                        LOCAL TIME & DATE
                        </Card.Title>
                        <Card.Text>
                          <div id="local-time">
                            {DateTime.now().toFormat("HH':'mm ",data.time_zone.current_time)}
                          </div>
                          <div id="local-date">
                            {DateTime.now().toFormat('MM-dd-yyyy',data.time_zone.current_time)}
                          </div>
                          <div id="gmt-zone">
                            GMT Time: <span>{currentGMTTime.toFormat("HH:mm")}</span><br/>
                            Zone Name: <span>{data.time_zone.name}</span><br/>
                            Time Zone: <span>{data.time_zone.offset}</span></div>
                        </Card.Text>
                    </Card.Body>
                </Card>
      </div>

  );
}



