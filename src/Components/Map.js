
import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './Location';
import useFetch from '../CustomHooks/useFetch';

export default function Map() {
  const myMap = process.env.REACT_APP_MY_MAP;
  const myAPI = process.env.REACT_APP_MY_API;

  const [center, setCenter] = useState({ lat: 51.4934, lng: 0.0098 });
  const [zoom, setZoom] = useState(8);
  const { data } = useFetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${myAPI}`);
  

  useEffect(() => {
    if (data) {
      setCenter({ lat: data.latitude, lng: data.longitude });
      setZoom(10); 
    }
  }, [data]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height: '50vh', width: '50%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: myMap }}
        center={center}
        zoom={zoom}
      >
        <LocationPin lat={data.latitude} lng={data.longitude} />
      </GoogleMapReact>
    </div>
  );
}
