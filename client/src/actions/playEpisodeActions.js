export const playEpisode = (url) => {
    console.log('clicked play episode', url)
    return (dispatch) => {
        console.log('this is dispatch')
        dispatch({
            type: "PLAY_EPISODE",
            payload: url
        })
    }

}


