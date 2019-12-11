const initState = {
    allEpisodesArray: [
       
    ],
    isLoading: false,
    isLoginOpen: false,
    isUserLoggedIn: false,
    isEpisodeMetadataOpen: false
}

const rootReducer = (state = initState, action) => {

    console.log(action.type, '----- action type')

    


    // LOADS EPISODES

    if (action.type === 'CALLAPI') {
        
        
        return {
            ...state,
            allEpisodesArray: action.payload
        }
    }

    // SHOWS LOGIN MODAL

    if (action.type === "TOGGLE_LOGIN") {
        // console.log('login action has been called')

        if (!state.isLoginOpen) {
            // console.log(state, 'reducer')
            return {
                ...state,
                isLoginOpen: true
            }

        } else {
            // console.log(state, 'reducer')
            return {
                ...state,
                isLoginOpen: false
            }
        }
    }

    // LOGS USER IN

    if (action.type === "LOGINUSER") {
        console.log('user logged in')
        return {
            ...state,
            isUserLoggedin: true
        }
    }

    // LOGS USER OUT

    if (action.type === "LOGOUTUSER") {
        console.log('user logged out')
        return {
            ...state,
            isUserLoggedin: false
        }
    }

    // EPISODE METADATA TOGGLE

    if (action.type === "VIEW_EPISODE_METADATA") {
        console.log('Episode metadata toggle')
        
        if (state.isEpisodeMetadataOpen) {
            return {
                ...state,
                isEpisodeMetadataOpen: false
            }
        } else {
            return {
                ...state,
                isEpisodeMetadataOpen: true
            }
        }
    }
    // this is the original state
    
    return state;
}

export default rootReducer

