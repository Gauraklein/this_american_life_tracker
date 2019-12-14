export const callApiAction = () => {
  return (dispatch) => {
    fetch("http://localhost:9000/allEpisodes")
      .then(res => res.json())
      .then(episodes => {
        // console.log(episodes, 'from api call');
        dispatch({
          type: "CALLAPI",
          payload: episodes
        });
      })
      .catch((err) => {
        console.log(err, 'this is the error')
      });
  };
};

export const handleEpisodeClick = (episodeId) => {
  console.log('clicked', episodeId)
  return (dispatch) => {
      console.log('got to return statement')
      fetch(`http://localhost:9000/episodeview/${episodeId}`)
      .then(res=> res.json())
      .then(episodeMetadata => {
        console.log(episodeMetadata)
        dispatch({
          type: "VIEW_EPISODE_METADATA",
          payload: episodeMetadata
        })
      })
  }
}

// function callAPI () {
//     fetch("http://localhost:9000/allEpisodes")
//     .then(res => res.json())
//     .then(res => {console.log(res)})
//     // .then(res => this.setState({ allEpisodesArray: res }))
//     // .then(res => console.log(this.state, 'this is the state'))

//     // .then(console.log('fetched data', this.state.apiResponse))
//     .catch(err => err);
//   }

//travis AWS -- s3 bucket
