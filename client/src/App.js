import React from 'react';
import { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { callApiAction} from './actions/episodeActions'

// COMPONENTS 
import { EpisodeContainer } from './Components/EpisodeContainer'
import { Nav } from './Components/Nav'
import { Footer } from './Components/Footer'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { allEpisodesArray: []}
  }

  componentDidMount() {
    this.props.callAPI();
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
          <Nav />
          
            <EpisodeContainer episodes={this.props.allEpisodesArray} />
          
          <Footer />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    allEpisodesArray: state.allEpisodesArray
  }
}
  function mapDispatchToProps(dispatch) {
   return {
    callAPI: () => dispatch(callApiAction())
   };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);











