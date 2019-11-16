const allEpisodeData = require("./allEpisodeData")

// console.log(allEpisodeData.allEpisodeData[0])

let actSeedData = []

allEpisodeData.allEpisodeData.map(extractActData)

console.log(actSeedData)

function extractActData (individualEpisode) {

    for (let actNumber = 0; actNumber < individualEpisode.acts.length; actNumber++) {

        let individualActObject = {
            episode_number: individualEpisode.number,
            act_number: actNumber,
            title: individualEpisode.acts[actNumber].title,
            producers: individualEpisode.acts[actNumber].producers,
            description: individualEpisode.acts[actNumber].description,
            song: individualEpisode.acts[actNumber].song
        }

        actSeedData.push(individualActObject)
    }

}

