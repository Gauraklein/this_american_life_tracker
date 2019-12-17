import React from 'react';
import { Component } from 'react'
import './App.css';
import 'redux'

import { connect } from 'react-redux'

// Actions
import { callApiAction, handleEpisodeClick} from './actions/episodeActions'
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
    // console.log(this.state, 'this is the state')
  }

  render() {
    // console.log(this.props, "props")
    return (
      <div className="App">
            <Nav {...this.props}/>

            <LoginModal {...this.props} />

            <EpisodeMetadataModal {...this.props} />

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
    episodePlayUrl: state.episodePlayUrl

  }
}
  function mapDispatchToProps(dispatch) {
   return {
    callAPI: () => dispatch(callApiAction()),
    toggleLoginModal: () => dispatch(toggleLoginModal()),
    loginUser: () => dispatch(loginUser()),
    logoutUser: () => dispatch(logoutUser()),
    handleEpisodeClick: (id) => dispatch(handleEpisodeClick(id)),
    playEpisode: (url) => dispatch(playEpisode(url))
   };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);











