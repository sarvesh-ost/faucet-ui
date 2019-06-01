import React from 'react';
import './App.css';
import FaucetForm from "./faucet/Form";

function App() {
  return (
    <div className="App">

      <div className="page-header">

        <h1 className="display-3">
          <img src="favicon-removebg.png" alt="Italian Trulli"/>
            Mosaic Faucet
        </h1>

      </div>

      <div className="container">
        <FaucetForm/>
      </div>
    </div>
  );
}

export default App;
