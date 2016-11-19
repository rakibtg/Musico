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
          <form className="form-horizontal" onSubmit={this.handleSubmit}>

            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" 
                  id="videotitle" placeholder={ this.state.videoObj.title } value=''/>
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input type="email" className="form-control" 
                  id="videourl" placeholder={ this.state.videoObj.url } value='' />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input type="email" className="form-control" 
                  id="videoid" placeholder={ this.state.videoObj.id } value='' />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-default">Add Video</button>
              </div>
            </div>
          </form>
          {/*<form onSubmit={this.handleSubmit}>
            <input 
              type='text' 
              className='form-control' 
              value={ this.state.videoObj.title } 
              onChange={ this.handleChange } />
            <input 
              type='text' 
              className='form-control' 
              value={ this.state.videoObj.url }
              onChange={ this.handleChange } />
            <input type="submit" value="Submit" />
          </form>*/}
        </div>
      </div>
    )
  }
  
}