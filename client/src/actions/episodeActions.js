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
