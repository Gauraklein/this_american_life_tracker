const allEpisodeData = require("./allEpisodeData")

// console.log(allEpisodeData.allEpisodeData[0])

let actSeedData = []
let producerSeedData = []

allEpisodeData.allEpisodeData.map(extractActData)

console.log(producerSeedData)

function extractActData (individualEpisode) {

    for (let actNumber = 0; actNumber < individualEpisode.acts.length; actNumber++) {

        let individualActObject = {
            episode_number: individualEpisode.number,
            episode_title: individualEpisode.title,
            act_number: actNumber,
            act_title: individualEpisode.acts[actNumber].title,
            producers: individualEpisode.acts[actNumber].producers.toString(),
            description: individualEpisode.acts[actNumber].description,
            song: individualEpisode.acts[actNumber].song
        }

        actSeedData.push(individualActObject)

        for (let producerNumber = 0; producerNumber < individualEpisode.acts[actNumber].producers.length; producerNumber++) {

            let individualProducerObject = {
                episode_number: individualEpisode.number,
                episode_title: individualEpisode.title,
                act_number: actNumber,
                act_title: individualEpisode.acts[actNumber].title,
                producer: individualEpisode.acts[actNumber].producers[producerNumber]
            }
    
            producerSeedData.push(individualProducerObject)

        }
    }
}

module.exports = {
    actSeedData: actSeedData,
    producerSeedData: producerSeedData
  };