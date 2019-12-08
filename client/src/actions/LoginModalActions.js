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

  const inputEmail = document.getElementById('email').value
  const inputPassword = document.getElementById('password').value

  console.log(inputEmail)
  console.log(inputPassword)
  const loginURL = 'http://localhost:9000/login'
  const loginBody = {
    "email": inputEmail,
    "password": inputPassword
  }
 return (dispatch) => {
   fetch(loginURL, {
     method: 'POST',
     body: loginBody,
     headers: { "Content-Type": "application/json" }
   })
   .then(res => res.json())
   .then((res) => {
     console.log(res)
      if (res === 'post response') {
      dispatch({
        type: "LOGINUSER"
      })
    }
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
      console.log(JSON.stringify(res.body))
      dispatch({
        type: "LOGOUTUSER"
      })
    })
  }
}

