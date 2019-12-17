export const playEpisode = (playingEpisodeObject) => {
    console.log('clicked play episode', playingEpisodeObject)
    return (dispatch) => {
        console.log('this is dispatch')
        dispatch({
            type: "PLAY_EPISODE",
            payload: playingEpisodeObject
        })
    }

}


