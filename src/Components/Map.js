import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from './Location'
import useFetch from '../CustomHooks/useFetch';


export default function Map(){

  const myMap = process.env.REACT_APP_MY_MAP
  const myAPI = process.env.REACT_APP_MY_API
  const defaultProps = {
    center: {
      lat: 51.4934,
      lng: 0.0098
    },
    zoom: 8
  };

  const{data} = useFetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${myAPI}`)
  if (!data) {
    return <div>Loading...</div>;
  }

  return (

    <div style={{ height: '50vh', width: '50%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: myMap }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <LocationPin
          lat={data.latitude}
          lng={data.longitude}
          text='You are here'
        />
      </GoogleMapReact>
    </div>
  );
}