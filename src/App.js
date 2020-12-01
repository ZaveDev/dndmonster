import React from "react";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import MonsterDetails from "./components/MonsterDetails";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path={"/"}>
        <Home />
      </Route>

      <Route path={`/:monster`}>
        <MonsterDetails />
      </Route>
    </div>
  );
}

export default App;
