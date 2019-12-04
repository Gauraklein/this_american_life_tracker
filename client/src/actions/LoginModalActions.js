

export const toggleLoginModal = () => {
    console.log('login action triggered')
    // console.log(props)
    return (dispatch) => {
       
            dispatch({
              type: "TOGGLE_LOGIN"
            });
          
      };
}