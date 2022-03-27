import React from 'react';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <div className="App">
      <Navbar/>
      </div>

      <div className="content">
      <Home/>
      </div>
    </div>
  );
}

export default App;
