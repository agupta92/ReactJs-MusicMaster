import React, {Component} from 'react';
import './App.css';

class Gallery extends Component{

  constructor(props){
    super(props);
    this.state = {
      playingUrl: '',
      audio : null,
      playing : false
    }
  }

  playAudio(previewUrl){
    let audio = new Audio(previewUrl);
    if(!this.state.playing){
      audio.play();
      this.setState({
        playing:true,
        audio,
        playingUrl : previewUrl
      })
    } else {
      if(this.state.playingUrl === previewUrl){
        this.state.audio.pause();
        this.setState({
          playing: false
        })
      } else {
        this.state.audio.pause();
        audio.play();
        this.setState({
          playing:true,
          audio,
          playingUrl : previewUrl
        })
      }
    }
  }


  render(){
    console.log('Gallery Props', this.props);
    const {tracks} = this.props;
    console.log(typeof tracks);
    return(
      typeof tracks == 'undefined' ? <div></div>  :
      <div>
        {tracks.map((track, k) => {
          const trackImage = track.album.images[0].url;
          return (
            <div
              key={k}
              className= "track"
              onClick = {()=> this.playAudio(track.preview_url)}
            >
              <img
                src={trackImage}
                className = "track-img"
                alt ="track"
              />
              <p className="track-text"> {track.name}</p>
            </div>
        )
        })}
      </div>
    )
  }

}

export default Gallery;
