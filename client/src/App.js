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
    this.state = { apiResponse: []}
  }

  callAPI() {
    fetch("http://localhost:9000/testApi")
    .then(res => res.json())
    .then(res => this.setState({ apiResponse: res }))
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
          
            <EpisodeContainer episodes={this.state.apiResponse} />
          
          <Footer />
      </div>
    )
  }

}

export default App;











