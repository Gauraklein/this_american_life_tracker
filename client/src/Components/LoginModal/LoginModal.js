import React from 'react';
import styles from './LoginModal.css'

// console.log(styles.modalBody)


export const LoginModal = (props) => {

    return (
      <div className={"modalBody " + (props.isLoginOpen ? "": "hidden")}>

        <div className="loginText">
          <h3>Login here!</h3>
        </div>

        <form className="loginForm" action="localhost:9000/login" method="post">
          <div className="loginInputs flex4 flex-column centered">
          <span> Username: <input className={styles.test} type="text" name="username" id="username" /> </span>
  
          <span>Password: <input type="text" name="password" id="password" /> </span>
          </div>
          <span className="centered flex1"><button className="loginButton" type="submit">Login</button></span>
     </form>
     </div>
    )
  }

