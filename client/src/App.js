import React from 'react';
import { Component } from 'react'
import './App.css';
import 'redux'

import { connect } from 'react-redux'
import { callApiAction, handleEpisodeClick} from './actions/episodeActions'
import { toggleLoginModal, loginUser, logoutUser } from './actions/LoginModalActions'


// COMPONENTS 
import { EpisodeContainer } from './Components/EpisodeContainer'
import { Nav } from './Components/Nav'
import { Footer } from './Components/Footer'
import { LoginModal } from './Components/LoginModal/LoginModal'



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

            <EpisodeContainer {...this.props} />

           

          <Footer />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    allEpisodesArray: state.allEpisodesArray,
    isLoading: state.isLoading,
    isLoginOpen: state.isLoginOpen,
    isUserLoggedIn: state.isUserLoggedIn,
    isEpisodeMetadataOpen: state.isEpisodeMetadataOpen

  }
}
  function mapDispatchToProps(dispatch) {
   return {
    callAPI: () => dispatch(callApiAction()),
    toggleLoginModal: () => dispatch(toggleLoginModal()),
    loginUser: () => dispatch(loginUser()),
    logoutUser: () => dispatch(logoutUser()),
    handleEpisodeClick: (id) => dispatch(handleEpisodeClick(id))
   };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);











