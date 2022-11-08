import React, { useState, useEffect } from "react";
import axios from 'axios';
import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SIdeBar";
import CollectionContainer from "./Components/CollectionContainer/CollectionContainer";

function App() {

  return (
    <div className="App">
      < NavBar />
      <SideBar />
      <CollectionContainer />
    </div>
  );
}

export default App;
