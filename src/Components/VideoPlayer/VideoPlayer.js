import React, { Component } from 'react';
import './videoplayer.css';

export class VideoPlayer extends Component {

  render() {
    return (
      <div>
        <div className='embed-responsive embed-responsive-16by9'>
          <iframe width="420" height="315" className='embed-responsive-item'
            src='https://www.youtube.com/embed/c4BLVznuWnU'>
          </iframe>
        </div>
      </div>
    );
  }

}