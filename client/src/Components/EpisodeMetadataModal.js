import React from 'react';
const moment = require("moment");



export const EpisodeMetadataModal = (props) => {

    return (
        <div className={"modalBody " + checkEpisodeMetadata(props)}>

            <div className="episodeMetadataContainer">
                
                {renderEpisode(props.episodeMetadata)}

            </div>  


        </div>
    )
}

function renderEpisode (episodeMetadata) {
    if (episodeMetadata.length > 0) {

        let publishDate = moment(episodeMetadata[0].date_published).format(
            "MMM Do YYYY"
          );

    return (
    <div className="episodeMetadataContainerRendered">
        <p>
            Episode {episodeMetadata[0].episode_number} -- {publishDate}
        </p>

        <br/>

        <h1>{episodeMetadata[0].episode_title}</h1>
        <br/>
        <p>{episodeMetadata[0].episode_description}</p>
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
    
    return (
        <div className="actContainer">

        </div>
    )

}

function checkEpisodeMetadata (props) {
    // console.log('checklogin is running')
    if (props.modal == 'episodeMetadata') {
      return ""
    } else {
      return "hidden"
    }
  }