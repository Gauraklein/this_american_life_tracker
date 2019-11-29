const initState = {
    allEpisodesArray: [
       
    ]
}

const rootReducer = (state = initState, action) => {

    console.log(action)

    if (action.type === 'CALLAPI') {
        
        
        return {
            ...state,
            allEpisodesArray: action.payload
        }
    }


    return state;
}

export default rootReducer

