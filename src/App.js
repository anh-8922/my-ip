import './App.css';
import IpAddress from './Components/IpAddress';
import CountryFlag from './Components/CountryFlag';
import DateAndTime from './Components/Date';
import CountryData from './Components/Country';
import Map from './Components/Map';

function App() {
  return (
    <div className="App">
   <IpAddress/>
   <CountryFlag/>
   <DateAndTime/>
   <CountryData/>
   <Map/>
    </div>
  );
}

export default App;
