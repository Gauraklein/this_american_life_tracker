import React from 'react';
import { Component } from 'react'
import './App.css';

import { connect } from 'react-redux'
import { callApiAction} from './actions/episodeActions'
import { toggleLoginModal } from './actions/LoginModalActions'


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
  }

  render() {
    console.log(this.props, "props")
    return (
      <div className="App">
          <Nav {...this.props}/>

            <LoginModal {...this.props} />

            <EpisodeContainer episodes={this.props.allEpisodesArray} />

           

          <Footer />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    allEpisodesArray: state.allEpisodesArray,
    isLoading: state.isLoading,
    isLoginOpen: state.isLoginOpen

  }
}
  function mapDispatchToProps(dispatch) {
   return {
    callAPI: () => dispatch(callApiAction()),
    toggleLoginModal: () => dispatch(toggleLoginModal())
   };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);











