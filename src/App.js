import React, { Component } from 'react';
import './App.css';
import FileUpload from './components/fileUpload';
import Visualize from './components/visualize';
import Navbar from './components/navbar';
import { Route, BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={FileUpload}/>
          <Route exact path='/data-visualize' component={Visualize}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
