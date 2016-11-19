import { EventEmitter } from 'events';

class VideoStore extends EventEmitter {
  constructor () {
    super ();
    this.playlists = [
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
    ];
  }

  getAll () {
    return this.playlists;
  }

}

const videoStore = new VideoStore;
export default videoStore;  