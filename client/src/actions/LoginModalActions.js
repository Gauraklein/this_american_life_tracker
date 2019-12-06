// const bcrypt = require("bcrypt");
// const saltRounds = 10;

export const toggleLoginModal = () => {
    // console.log('login action triggered')
    // console.log(props)
    return (dispatch) => {
       
            dispatch({
              type: "TOGGLE_LOGIN"
            });
          
      };
}

export const loginUser = (username, password) => {

  const inputUsername = document.getElementById('username').value
  const inputPassword = document.getElementById('password').value
  const loginURL = 'http://localhost:9000/login'
  const loginBody = JSON.stringify({
    "username": inputUsername,
    "password": inputPassword
  })
 return (dispatch) => {
   fetch(loginURL, {
     method: 'POST',
     body: loginBody,
     headers: { "Content-Type": "application/json" }
   })
   .then(res => res.json())
   .then((res) => {
     console.log(res)
      dispatch({
        type: "LOGINUSER"
      })
   })
   .catch((err) => {
     console.log(err, 'this is the error')
   })
 }
}

export const logoutUser = () => {
  return (dispatch) => {
    fetch("http://localhost:9000/logout")
    .then((res) => res.json())
    .then((res) => {
      console.log(res, 'this is the logout res')
      dispatch({
        type: "LOGOUTUSER"
      })
    })
  }
}

