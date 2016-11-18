import React, { Component } from 'react';

export default class AddVideo extends Component {
  constructor ( props ) {
    super ( props );
    this.state = {
      videoObj: {
        title : 'e.g: Video title',
        url   : 'e.g: https://www.youtube.com/watch?v=18lP9SYCt_E',
        id    : 'e.g: 18lP9SYCt_E'
      }
    }
  }

  render () {
    return (
      <div>
        <div className='video-form'>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.videoObj.title} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
  
}