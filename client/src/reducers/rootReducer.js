const initState = {
    allEpisodesArray: [
       
    ],
    isLoading: false,
    isLoginOpen: false
}

const rootReducer = (state = initState, action) => {

    console.log(action)

    if (action.type === 'CALLAPI') {
        
        
        return {
            ...state,
            allEpisodesArray: action.payload
        }
    }

    if (action.type === "TOGGLE_LOGIN") {
        console.log('this action has been called')

        if (!state.isLoginOpen) {
            console.log(state)
            return {
                ...state,
                isLoginOpen: true
            }

        } else {
            return {
                ...state,
                isLoginOpen: false
            }
        }
    }


    return state;
}

export default rootReducer

