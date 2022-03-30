import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";

function App() {
  return (
    <Router>
      <div>
        <div className="App">
          <Navbar />
        </div>

        <div className="content">
          <Switch>
            <Route exact path='/' >
            <Home />
            </Route>
            <Route path='/create' >
            <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
