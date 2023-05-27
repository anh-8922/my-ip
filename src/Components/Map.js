
import GoogleMapReact from 'google-map-react'
import LocationPin from './Location'
import useFetch from '../CustomHooks/useFetch';
import './css/styles.css';
import { useState, useEffect } from 'react';
import '../Mobile/mobilestyle.css'

export default function Map() {
  const myMap = process.env.REACT_APP_MY_MAP;
  const myAPI = process.env.REACT_APP_MY_API;

  const [center, setCenter] = useState({ lat: 51.4934, lng: 0.0098 });

  const [zoom, setZoom] = useState(1);
  const { data } = useFetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${myAPI}`);
  


  useEffect(() => {
    if (data) {
      setCenter({ lat: data.latitude, lng: data.longitude });
      setZoom(8); 

    }
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (

    <div id="map-box">
      <GoogleMapReact id='locate-map'

        bootstrapURLKeys={{ key: myMap }}
        center={center}
        zoom={zoom}
      >
        <LocationPin lat={data.latitude} lng={data.longitude} text="You are here" />
      </GoogleMapReact>
    </div>
  );

}

