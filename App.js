import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div>
        <div className="App">
          <Navbar />
        </div>

        <div className="content">
          <Switch>
            <Route exact path='/'>
            <Home />
            </Route>
            <Route path='/create'>
            <Create />
            </Route>
            <Route path='/blogs/:id'>
            <BlogDetails />
            </Route>
            <Route path='*'> 
            <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
//<Route path='*'> If React does not found any match then it comes to path='*' 