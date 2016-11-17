import React, { Component } from 'react';

import './App.css';

import Header from './Components/Header/Header';
import VideoLists from './Components/VideoLists/VideoLists';
import {VideoPlayer} from './Components/VideoPlayer/VideoPlayer'; 

class App extends Component {

  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <div className="col-sm-6">
            <VideoLists/>
          </div>
          <div className="col-sm-6">
            <VideoPlayer/>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;