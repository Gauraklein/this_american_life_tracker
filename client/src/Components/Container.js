import React from 'react';
import { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


// COMPONENTS 
import { EpisodeContainer } from './Components/EpisodeContainer'
import { Nav } from './Components/Nav'
import { Footer } from './Components/Footer'

function reducer(state, action) {
  return {
    episodeArray: []
  }
}

const store = createStore(reducer)

export class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { episodeArray: []}
  }

  callAPI() {
    fetch("http://localhost:9000/testApi")
    .then(res => res.json())
    .then(res => this.setState({ episodeArray: res }))
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
          
            <EpisodeContainer episodes={this.props.episodeArray} />
          
          <Footer />
      </div>

    )
  }
}  

const mapStateToProps = (state) => ({
    episodeArray: state.episodeArray
  })

const mapDispatchToProps = dispatch => {
    return 
}

const reduxConnected = connect(mapStateToProps, mapDispatchToProps)
export default reduxConnected(Container);