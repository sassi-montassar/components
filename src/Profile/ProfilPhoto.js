import React from 'react';
import myImag1 from './img.jpg';
import '../App.js';



function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black", maxWidth:"100vw"}}>
      <h1 className="title red">My Profile</h1>
      <img src={myImag1} alt="my profile" className="myImg"></img>
      
      </div>
     

     
    </div>
  );
}

export default App;

