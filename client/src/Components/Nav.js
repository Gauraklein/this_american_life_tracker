import React from 'react';
import logo from './../talLogo.png';

import { connect } from 'react-redux'
// import { toggleLoginModal } from '../actions/LoginModalActions'

export const Nav = (props) => {
  // console.log(props, 'nav props')
    return (
      <nav className="navBar flex1 flex-row">
  
        <div className="nav-left flex1 centered flex-column">
            <img className="navLogo"  src={logo} alt="This American life logo" />
        </div>
  
      <div className="flex8 navSpacer"></div>
  
      <div className="flex1 nav-right centered flex-row">
          <ul className="navMenu">
              
              <li><a href="#" onClick={props.toggleLoginModal}>Login</a></li>
              <li><a href="#about">About</a></li>
          </ul>
      </div>
    </nav>
    )
  }

  const showLogin = (props) => {
    console.log("login Clicked")
    props.toggleLoginModal()
    // dispatch({
    //   type: 'TOGGLE_LOGIN'
    // })

  }

 