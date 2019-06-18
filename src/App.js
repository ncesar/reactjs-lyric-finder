import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />

      </React.Fragment>
    </BrowserRouter>
  );
}

//85c8b24adbbdaf9cbf269d55e4ef68ae
//https://www.youtube.com/watch?v=NDEt0KdDbhk 15min

export default App;
