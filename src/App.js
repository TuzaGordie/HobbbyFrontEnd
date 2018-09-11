import React, { Component } from 'react';
import Routes from "./Routes";
//components
import Homepage from './components/pages/Homepage';

//includes

class App extends Component {
  render() {
    return (
      <Routes>
        <div className="App">
          <Homepage/>
        </div>
      </Routes>
    );
  }
}

export default App;
