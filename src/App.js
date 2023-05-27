//import logo from './logo.svg';
//import './App.css';
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import map from './Components/map.jpg';
import CheckZone from "./pages/checkzone";

function App() {
  return (
    <div style={{ backgroundImage: `url(${map})`, backgroundSize: "cover"}}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/checkzone" element={<CheckZone/>}/> 
              
        </Routes>
      </BrowserRouter>    
    </div>
    
    
    
  );
}

export default App;

