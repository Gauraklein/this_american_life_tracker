import React from 'react';
import { Component } from 'react'
import logo from './talLogo.png';
import './App.css';
const moment = require("moment")

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

const EpisodeContainer = ({episodes}) => {
  return (
    <div className="episodeCardContainer centered flex8 flex-wrap flex-row">
    {episodes.map(renderEpisodeCard)}
  </div>
  )
}

const renderEpisodeCard = (episodeMetadata) => {

  if (episodeMetadata.image == null) {
    episodeMetadata.image = logo
  }

  let publishDate = moment(episodeMetadata.date_published).format('MMM Do YYYY')
  

  return (

      <div className="episodeCard flex-column">

        <div className="episodeImgContainer">

          <img src={episodeMetadata.image} alt="Episode Image" className="episodeImage"/>

        </div>

        <h5>Episode {episodeMetadata.episode_number}: {episodeMetadata.episode_title}</h5>
        <p>Date Published: {publishDate}</p>

      </div>

  )

}



const Nav = (props) => {
  return (
    <nav className="flex1 centered flex-row">

      <div className="nav-left flex1 centered flex-column">
          <img className="navLogo"  src={logo} alt="This American life logo" />
      </div>

    <div className="flex8 navSpacer"></div>

    <div className="flex1 nav-right centered flex-row">
        <ul className="navMenu">
            <li><a href="#">Login</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    </div>
  </nav>
  )
}

const LoginBody = (props) => {

  return (
    <div className="flex4 title flex-column centered">
              <h3 className="flex2">The Best Way to Keep Track of Your Listening History</h3>
    
               <div  className="loginForm flex6 flex-column">
                    <form action="submit">
                           UserName:<input type="text" />
                           Password:<input type="text"/>
                    </form>
                </div>
                
                <div className="flex2" id="about">
                <p>This project started by filling a need to keep track of which episodes of 'This American Life' I have listened to
                     as well as a way to keep track of my ratings of those episodes.
                 </p>
             </div>
     </div> 
  )
}



const Footer = (props) => {

  return (
    <div id="footer" className="centered flex1">
        <p>Footer Goes Here</p>
    </div>
  )
}

