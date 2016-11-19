import React, { Component } from 'react';
import VideoStore from '../../Stores/VideoStore';
import './videolists.css';

export default class VideoLists extends Component {

  constructor() {
    super();
    this.state = {
      playlists: VideoStore.getAll()
    };
  }
  
  itemSelected(itemObject) {
    console.log(itemObject);
  }

  render() {
    return (
      <div>

        <ul className='list-group musify'>
          {this.state.playlists.map(function(item, index){
            return <li 
                      key = { index } 
                      className='list-group-item'
                      onClick={() => this.itemSelected(item)}>
                      <div className='videoTitle'>
                        { item.title }
                      </div>
                  </li>; 
          }, this)}
        </ul>

      </div>
    );
  }

}