import React from 'react';
import { Component } from 'react'
import './App.css';
import 'redux'

import { connect } from 'react-redux'

// Actions
import { callApiAction, handleEpisodeClick, backToAllEpisodes} from './actions/episodeActions'
import { toggleLoginModal, loginUser, logoutUser } from './actions/LoginModalActions'
import {playEpisode} from './actions/playEpisodeActions'


// COMPONENTS 
import { EpisodeContainer } from './Components/EpisodeContainer'
import { Nav } from './Components/Nav'
import { AudioFooter } from './Components/Footer'
import { LoginModal } from './Components/LoginModal'
import { EpisodeMetadataModal } from './Components/EpisodeMetadataModal'
import { Intro }  from './Components/Intro'



class App extends Component {
  constructor(props) {
    super(props);
    // this.state = { allEpisodesArray: []}
  }

  componentDidMount() {
    this.props.callAPI();
    window.onpopstate = (event, props) => {
      // console.log(event, this.props)
      if (this.props.singleEpisodeView) {
        this.props.backToAllEpisodes()
      }
      // goBackIfNeeded
    }
    // console.log(this.state, 'this is the state')
  }

  render() {
    // console.log(this.props, "props")
    return (
      <div className="App">
            <Nav {...this.props}/>

            <LoginModal {...this.props} />

            {/* <EpisodeMetadataModal {...this.props} /> */}

            {/* <Intro /> */}

            <EpisodeContainer {...this.props} />

          <AudioFooter {...this.props} />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    allEpisodesArray: state.allEpisodesArray,
    isLoading: state.isLoading,
    modal: state.modal,
    singleEpisodeView: state.singleEpisodeView,
    isUserLoggedIn: state.isUserLoggedIn,
    episodeMetadata: state.episodeMetadata,
    shouldAudioPlay: state.shouldAudioPlay,
    playingEpisodeObject: state.playingEpisodeObject

  }
}
  function mapDispatchToProps(dispatch) {
   return {
    callAPI: () => dispatch(callApiAction()),
    toggleLoginModal: () => dispatch(toggleLoginModal()),
    loginUser: () => dispatch(loginUser()),
    logoutUser: () => dispatch(logoutUser()),
    handleEpisodeClick: (id) => dispatch(handleEpisodeClick(id)),
    playEpisode: (playingEpisodeObject) => dispatch(playEpisode(playingEpisodeObject)),
    backToAllEpisodes: () => dispatch(backToAllEpisodes())
   };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);











