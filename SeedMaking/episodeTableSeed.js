const allEpisodeData = require("./allEpisodeData")

// console.log(allEpisodeData.allEpisodeData[0])

let episodeSeedData = []



extractEpisodeinfo = (individualEpisode) => {

    let individualEpisodeObject = {
        episode_number: individualEpisode.number,
        episode_title: individualEpisode.title,
        description: individualEpisode.description,
        date_published: individualEpisode.date,
        image: individualEpisode.image,
        podcast_url: "http://assets.thisamericanlife.co/podcasts/" + individualEpisode.number + ".mp3",
        number_of_acts: individualEpisode.acts.length,
        slug: '/' + individualEpisode.number + '/' + individualEpisode.title
    }

    episodeSeedData.push(individualEpisodeObject)

}

allEpisodeData.allEpisodeData.map(extractEpisodeinfo)

console.log(episodeSeedData)

module.exports = {
    episodeSeedData: episodeSeedData
  };