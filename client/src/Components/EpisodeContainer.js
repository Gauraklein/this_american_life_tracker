import React from "react";
import logo from "./../talLogo.png";
import Fade from "react-reveal/Fade";
// import { PresignedPost } from "aws-sdk/clients/s3";
// import { handleEpisodeClick } from "../actions/episodeActions"
// import styles from './EpisodeContainer.css';
const moment = require("moment");

// episode container component

export const EpisodeContainer = (props) => {

  console.log(props)

  if (!props.singleEpisodeView) {

  return (
    <div className="episodeCardContainer centered flex8 flex-wrap flex-row">
      {
      
        props.allEpisodesArray.map((episode) => <EpisodeCard {...episode} handleEpisodeClick= {props.handleEpisodeClick} />)
      
      }
    </div>
  );

    } else {

      return (

        <div className="SingleEpisodeContainer flex8">
          
          {renderEpisode(props.episodeMetadata, props)}
          </div>
          
      )
    }
};


//Single episode view

function renderEpisode (episodeMetadata, props) {
  if (episodeMetadata.length > 0) {

      let publishDate = moment(episodeMetadata[0].date_published).format(
          "MMM Do YYYY"
        );

      let episodeUrl = "https://podcast.thisamericanlife.org/podcast/" + episodeMetadata[0].episode_number + ".mp3"

  return (
  <div className="SingleEpisodeMetadataContainer flex-column">

    <div className="episodeMetaSticky flex-column flex1">

      <div className="episodeMetaStickyTopRow flex-row">

      <i className="fa fa-thumbs-up"></i>

        <button onClick={props.backToAllEpisodes.bind(this)} className="singleEpisodeBackButton">Back</button>

        <p>
            Episode {episodeMetadata[0].episode_number} -- {publishDate}
        </p>
 
      </div>
          
      <div className="episeodeMetaBottomRow flex-column centered">
        <div className="singleEpisodePlayAndTitle flex-row">
          <button className="playEpisodeButton" onClick={props.playEpisode.bind(this, episodeUrl)}>Play Episode</button>
          <h1>{episodeMetadata[0].episode_title}</h1>
        </div>
          <hr/>
          <p>{episodeMetadata[0].episode_description}</p>
          
      </div>

    </div>

    <div className="episodeMetaScroll flex9 flex-column">

      <div className="episodeMetadataImgContainer centered">
        <img className="episodeMetadataImg"src={episodeMetadata[0].image} alt=""/>
      </div>

      <div className="singleEpisodeActs">
        {episodeMetadata.map(RenderAct)}
      </div>
    </div>
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
      actNumberName = "Act " + actNumberForRendering
  }


  return (
      <div className="actContainer">
          <h3>{actNumberName}: {act.act_title}</h3> 
          
          <p><i>{act.producers}</i></p>
          
          <p>{act.act_description}</p>
          
          {renderSong(act)}

      </div>
  )

}

function renderSong (act) {

  if (act.act_song !== "") {
      let actSong = act.act_song

      return (
          <p><i>Song: {actSong}</i></p>
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

//function to render episode card

const EpisodeCard = (episodeMetadata) => {


  let backgroundImage = episodeMetadata.image;

  if (backgroundImage == null) {
    backgroundImage = logo;
  }

  let publishDate = moment(episodeMetadata.date_published).format(
    "MMM Do YYYY"
  );

  let wrapperStyle = {
    backgroundImage: "url(" + backgroundImage + ")",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  let fadeDuration = Math.floor(Math.random() * 1801);

  return (
    <Fade big cascade duration={fadeDuration}>
      <div className="episodeCardStyle card">
      
        <div id={episodeMetadata.episode_number}  onClick={episodeMetadata.handleEpisodeClick.bind(this, episodeMetadata.episode_number)} className="wrapper episodeCardClickable" style={wrapperStyle}>
          <div className="date">{publishDate}</div>
          <div className="data">
            <div className="content">
              <div className="readMoreFooter">
                <span className="author">
                  Episode {episodeMetadata.episode_number}
                </span>

                <a href="#" className="button">
                  Read more
                </a>
              </div>
              <h1 className="title">
                <a href="#">{episodeMetadata.episode_title}</a>
              </h1>
              <p className="text">{episodeMetadata.episode_description}</p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};
