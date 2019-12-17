const initState = {
    allEpisodesArray: [
       
    ],
    isLoading: false,
    modal: null,
    singleEpisodeView: false,
    isUserLoggedIn: false,
    episodeMetadata: [],
    shouldAudioPlay: false,
    playingEpisodeObject: {}
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

        if (state.modal !== 'login') {
            // console.log(state, 'reducer')
            return {
                ...state,
                modal: 'login'
            }

        } else {
            // console.log(state, 'reducer')
            return {
                ...state,
                modal: null
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

    // SINGLE EPISODE VIEW 

    if (action.type === "VIEW_EPISODE_METADATA") {
        console.log('Episode metadata toggle')
        
        if (!state.singleEpisodeView) {
            console.log(state, 'reducer')

            return {
                ...state,
                singleEpisodeView: true,
                episodeMetadata: action.payload
            }
        } else {
            console.log(state, 'reducer')

            return {
                
                ...state,
                singleEpisodeView: false
                
                
            }
        }
    }

    // BACK TO ALL EPISODES 

    if (action.type === "BACK_TO_ALL_EPISODES") {
        if (state.singleEpisodeView) {
            return {
                
                ...state,
                singleEpisodeView: false
                
                
            }
        }
    }


    // EPISODE PLAY

    if (action.type === 'PLAY_EPISODE') {
        console.log(state)
        return {
            ...state,
            shouldAudioPlay: true,
            playingEpisodeObject: action.payload
        }
    }
    // this is the original state
    
    return state;
}

export default rootReducer

