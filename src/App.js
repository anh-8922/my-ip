//import logo from './logo.svg';
//import './App.css';

//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/layout";
import Home from "./Components/home";
import Login from "./Components/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/css/styles.css';
import map from './Components/map.jpg';

function App() {
  return (
    <div id="main" style={{ backgroundImage: `url(${map})`, backgroundSize: "cover"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="checkip" element={<Home/>}/>
           
            <Route path="/user/:name" />
          </Route>
        </Routes>
      </BrowserRouter>    
    </div>
    
    
    
  );
}

export default App;

