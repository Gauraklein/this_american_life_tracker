import React from 'react';
import { Component } from 'react'
import './App.css';

// COMPONENTS 
import { EpisodeContainer } from './Components/EpisodeContainer'
import { Nav } from './Components/Nav'
import { Footer } from './Components/Footer'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { allEpisodesArray: []}
  }

  callAPI() {
    fetch("http://localhost:9000/allEpisodes")
    .then(res => res.json())
    .then(res => this.setState({ allEpisodesArray: res }))
    .then(res => console.log(this.state, 'this is the state'))
   
    // .then(console.log('fetched data', this.state.apiResponse))
    .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
          <Nav />
          
            <EpisodeContainer episodes={this.state.allEpisodesArray} />
          
          <Footer />
      </div>
    )
  }

}

export default App;











