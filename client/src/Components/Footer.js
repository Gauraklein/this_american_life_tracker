import React from 'react';
import AudioPlayer from 'react-modular-audio-player';
import play from './../play.png'
import pause from './../pause.png'

export const AudioFooter = (props) => {
  
  if (props.shouldAudioPlay === true) {
    console.log('audio player is true')
    //for Audio Player
    let episodeInfo = [{
      src: props.episodePlayUrl,
      title: props.episodeMetadata[0].episode_number + ':' + props.episodeMetadata[0].episode_title
    }]

    let rearrangedPlayer = [
      {
        className: "player",
        style: { height: "100%"},
        innerComponents: [
          { 
            type: "play",
            style: {width: "fit-content", alignSelf:"center"}
          },
          {
            type: "name",
            style: {fontSize: "2em"}
          },
          {
            type: "time",
            style: {width: "fit-content"}
          },
          {
            type: "seek"
          }
        ]
      }
    ]

    let playingImgStyle = {
      backgroundImage: "url(" + props.episodeMetadata[0].image + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width:"10%",
      paddingBottom:"10%"
    };

    return (
      <div id="footer" className="flex-row flex1">
          <div className="" style={playingImgStyle} id="playingImg">
           
          </div>
          <AudioPlayer 
            rearrange={rearrangedPlayer}
            // iconSize="5em"
            // playIcon={play}
            audioFiles={episodeInfo}
            playerWidth="90%" 
          />
      </div>
    )
  } else {
    console.log('audio player is false')
    return (
    <div id="footer" className="centered flex1">
        <p></p>
    </div>
  )
    }
}