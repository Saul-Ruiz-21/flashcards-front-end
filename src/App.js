import React, { useState, useEffect } from "react";
import axios from 'axios';
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main/Main";

function App() {

  return (
    <div className="App">
      < NavBar />
      <Main />
    </div>
  );
}

export default App;
