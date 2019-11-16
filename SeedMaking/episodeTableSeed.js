const allEpisodeData = require("./allEpisodeData")

// console.log(allEpisodeData.allEpisodeData[0])

let episodeSeedData = []



extractEpisodeinfo = (individualEpisode) => {

    let individualEpisodeObject = {
        number: individualEpisode.number,
        title: individualEpisode.title,
        description: individualEpisode.description,
        date: individualEpisode.date,
        image: individualEpisode.image,
        podcast_url: "http://assets.thisamericanlife.co/podcasts/" + individualEpisode.number + ".mp3",
        number_of_acts: individualEpisode.acts.length
    }

    episodeSeedData.push(individualEpisodeObject)

}

allEpisodeData.allEpisodeData.map(extractEpisodeinfo)

console.log(episodeSeedData)