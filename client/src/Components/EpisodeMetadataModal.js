import React from 'react';
const moment = require("moment");



export const EpisodeMetadataModal = (props) => {

    return (
        <div className={"episodeMetadataModalBody " + checkEpisodeMetadata(props)}>
            <div className="episodeMetadataContainer">
                
                {renderEpisode(props.episodeMetadata, props)}

            </div>  


        </div>
    )
}

function renderEpisode (episodeMetadata, props) {
    if (episodeMetadata.length > 0) {

        let publishDate = moment(episodeMetadata[0].date_published).format(
            "MMM Do YYYY"
          );

        let episodeUrl = "https://podcast.thisamericanlife.org/podcast/" + episodeMetadata[0].episode_number + ".mp3"

    return (
    <div className="episodeMetadataContainerRendered">

        <p>
            Episode {episodeMetadata[0].episode_number} -- {publishDate}
        </p>

        <button className="closeEpisodeMetadataButton">Close</button>

        <br/>

        <h1>{episodeMetadata[0].episode_title}</h1>
        <br/>
        <p>{episodeMetadata[0].episode_description}</p>
        
        <button onClick={props.playEpisode.bind(this, episodeUrl)}>Play Episode</button>

        <br/>
        <div className="episodeMetadataImgContainer">
        <img className="episodeMetadataImg"src={episodeMetadata[0].image} alt=""/>
        </div>

        {episodeMetadata.map(RenderAct)}
    </div>
    )
    }
}

function RenderAct(act) {
    let actNumberName = ""

    //names the act number

    if (act.act_number.endsWith(0)) {
        actNumberName = "Prologue"
    } else {
        let actNumberForRendering = act.act_number.charAt(act.act_number.length - 1)
        actNumberName = "Act" + actNumberForRendering
    }


    return (
        <div className="actContainer">
            <h3>{actNumberName}: {act.act_title}</h3> 
            <br/>
            <p><i>{act.producers}</i></p>
            <br/>
            <p>{act.act_description}</p>
            <br/>
            {renderSong(act)}

        </div>
    )

}

function renderSong (act) {

    if (act.act_song !== "") {
        let actSong = act.act_song

        return (
            <p>Song: {actSong}</p>
        )
    }
}

function checkEpisodeMetadata (props) {
    // console.log('checklogin is running')
    if (props.modal == 'episodeMetadata') {
      return ""
    } else {
      return "hidden"
    }
  }