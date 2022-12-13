
import './App.css';
import React from "react";
import header from "bootstrap"
import Redes from "./components/redes"
import CarouselEx from './components/carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App-header">
       <div className='App'>
      DEPARTAMENTOS en
      VILLA CARLOS PAZ
      </div>
      <CarouselEx />
 
    <Redes />
    
     
     <a
        href="https://wa.me/5493541677768"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
        text= "chatea con nosotros"
       title='chatea con nosotros'
       
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
     
    </div>
  );
}

export default App;
