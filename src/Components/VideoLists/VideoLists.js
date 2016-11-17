import React, { Component } from 'react';
import './videolists.css';

export default class VideoLists extends Component {

  constructor() {
    super();
  }

  getDefaultLists() {
    return [
      {
        title: 'Iridescent (Official Video) - Linkin Park',
        url: 'https://www.youtube.com/watch?v=xLYiIBCN9ec',
        id: 'xLYiIBCN9ec' 
      },
      {
        title: 'Ed Sheeran - I\'m A Mess (x Acoustic Sessions)',
        url: 'https://www.youtube.com/watch?v=-t2CR9qZRj0',
        id: '-t2CR9qZRj0' 
      },
      {
        title: 'Ed Sheeran - Lego House [Official Video]',
        url: 'https://www.youtube.com/watch?v=c4BLVznuWnU',
        id: 'c4BLVznuWnU' 
      }
    ]
  }

  itemSelected(itemObject) {
    console.log(itemObject);
  }

  render() {
    return (
      <div>
            
        <ul className='list-group musify'>
          {this.getDefaultLists().map(function(item, index){
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