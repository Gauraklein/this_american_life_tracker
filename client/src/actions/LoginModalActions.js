export const toggleLoginModal = () => {
    console.log('action triggered')
    return (dispatch, getState) => {
       
            dispatch({
              type: "TOGGLE_LOGIN"
            });
          
      };
}