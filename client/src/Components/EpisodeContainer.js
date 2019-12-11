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

  return (
    <div className="episodeCardContainer centered flex8 flex-wrap flex-row">
      {
      
        props.allEpisodesArray.map((episode) => <EpisodeCard {...episode} handleEpisodeClick= {props.handleEpisodeClick} />)
      
      }
    </div>
  );
};

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

  let fadeDuration = Math.floor(Math.random() * 2001);

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
