import React from 'react';

export const AudioFooter = (props) => {
  
  if (props.shouldAudioPlay === true) {
    console.log('audio playere is true')
    return (
      <div id="footer" className="centered flex1">
          <audio src={props.episodePlayUrl} type="audio/mpeg" controls autoPlay>audio</audio>
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