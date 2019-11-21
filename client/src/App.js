import React from 'react';
import { Component } from 'react'
import logo from './talLogo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: ""}
  }

  callAPI() {
    fetch("http://localhost:9000/testApi")
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res }))
    .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <LoginBody />
          <div className="centered flex2">
            <p className="App-intro">{this.state.apiResponse}</p>
          </div>
          <Footer />
      </div>
    )
  }

}

export default App;

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

{/* // const Login = (props) => { */}
{/* //   return (
 


//    

//             <div class="flex2" id="about">
//                 <p>This project started by filling a need to keep track of which episodes of 'This American Life' I have listened to
//                     as well as a way to keep track of my ratings of those episodes.
//                 </p>
//             </div>
//     </div> }

{/* //     
//   )
// } */}