import React from 'react';
import './App.css';
import ProfilPhoto from './Profile/ProfilPhoto.js';
import Adresse from './Profile/Adresse.js';
import FullName from  './Profile/FullName.js'



function App() {
  return (
    <div className="App">
      
    <ProfilPhoto/>
    <br/>
    <FullName/>
    <hr/>
     <Adresse/>
   
    </div>
  );
}

export default App;
