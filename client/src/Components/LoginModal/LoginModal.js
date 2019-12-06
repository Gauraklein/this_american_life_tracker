import React from 'react';
import styles from './LoginModal.css'


// console.log(styles.modalBody)


export const LoginModal = (props) => {

    
    // console.log(props, 'loginModal props', checkLogin(props))
    return (
      <div className={"modalBody " + checkLogin(props)}>

        <div className="loginText">
          <h3>Login here!</h3>
        </div>

        <div className="loginForm" >
          <div className="loginInputs flex4 flex-column centered">
          <span> Username: <input type="text" name="username" id="username" /> </span>
  
          <span>Password: <input type="text" name="password" id="password" /> </span>
          </div>
          <span className="centered flex1"><button onClick={props.loginUser} className="loginButton" type="submit">Login</button></span>
          <span className="centered flex1"><button onClick={props.logoutUser} className="loginButton" type="submit">Logout</button></span>
      </div>
     </div>
    )
  }

function checkLogin (props) {
  // console.log('checklogin is running')
  if (props.isLoginOpen === true) {
    return ""
  } else {
    return "hidden"
  }
}

function formSubmit (e, props) {
  e.preventDefault()
  console.log('form submitted')
}