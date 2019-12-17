const $ = require('cheerio')
const url = 'https://www.thisamericanlife.org/archive';
const puppeteer = require('puppeteer')
// const allEpisodeData = require('./../allEpisodeData')
// const allEpisodeInfoArray = allEpisodeData.allEpisodeData
// const url = 'https://www.thisamericanlife.org/'



async function getLatestEpisodeAndPushResults () {

    //browser launch
    const browser = await puppeteer.launch({
        
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        headless: false
    });

    //new page var 

    const page = await browser.newPage();

    await clickNewestEpisode(page)

    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    let pageHTML = await page.evaluate(() => document.body.innerHTML);

    await gatherEpisodeData(pageHTML)

    // await console.log('data added')

    await browser.close();

} 



// functions

async function clickNewestEpisode(page) {
    console.log('click newest')
    await page.goto(url);

    await page.click('#block-system-main > div > div:nth-child(3) > article.node.node-episode.node-teaser.view-teaser.clearfix.episode-number-689.with-image.links-processed > header > div > h2 > a')

    //this will go to homepage and click on first episode

}

function gatherEpisodeData (HTML) {

    // console.log('gathering data')

    //html selectors

    let episodeNumber = $('#block-system-main > div > article > header > div > div.meta > div.field.field-name-field-episode-number.field-type-number-integer.field-label-hidden > div > div', HTML).text()
    let episodeTitle = $('#block-system-main > div > article > header > div > div.episode-title > h1', HTML).text()
    let episodeDescription = $('#block-system-main > div > article > header > div > div.field.field-name-body.field-type-text-with-summary.field-label-hidden > div > div > p', HTML).text()
    let episodeDate = $('#block-system-main > div > article > header > div > div.meta > div.field.field-name-field-radio-air-date.field-type-date.field-label-hidden > div > div > span', HTML).text()
    let imageUrl = $('#block-system-main > div > article > figure > img', HTML).attr('src')
    let actsArray = findNumberOfActs(HTML)

    //episode object that will be pushed to final array

    let episodeObject = {

        number: episodeNumber,
        title: episodeTitle,
        description: episodeDescription,
        date: episodeDate,
        image: imageUrl,
        acts: actsArray
    }

    console.dir(episodeObject, {depth: null, maxArrayLength: null})
    // console.log('this is the episode object', episodeObject)
    // console.log('XXXXXXXXXXXXXXX')
    // allEpisodeInfoArray.unshift(episodeObject)
    
    // console.log('this is the first item in the all episode info', allEpisodeData.allEpisodeData[0])
    // console.log('this is the second item', allEpisodeData.allEpisodeData[1])
    // allEpisodeInfoArray.push(episodeObject)
}

//function that goes through the acts and creates act objects that are pushed to acts array

function findNumberOfActs (HTML) {

    // array that will be returned

    let actsArray = []

    // number of acts, dictates how many times the for loop will run

    let actSectionLength = $('#block-system-main > div > article > div > div.field.field-name-field-acts.field-type-entityreference.field-label-hidden > div', HTML).children().length
    let nodeCount = 1

    //FOR LOOP TO GO THROUGH EACH ACT

    for (let actToScrape = 0; actToScrape < actSectionLength; actToScrape++) {
    //variables 
    let actTitle = $(`#block-system-main > div > article > div > div.field.field-name-field-acts.field-type-entityreference.field-label-hidden > div > div:nth-child(${nodeCount}) > article > div > h2 > a`, HTML).text()
    let actProducers = findProducers(HTML, nodeCount)
    let actDescription = $(`#block-system-main > div > article > div > div.field.field-name-field-acts.field-type-entityreference.field-label-hidden > div > div:nth-child(${nodeCount}) > article > div > div.field.field-name-body.field-type-text-with-summary.field-label-hidden > div > div > p`, HTML).text()
    let actSong = $(`#block-system-main > div > article > div > div > div > div:nth-child(${nodeCount}) > article > div > div.field-collection-container.clearfix > div > div > div`, HTML).text()
    console.log('this is the act', actTitle)

        let actObject = {
            title: actTitle,
            producers: actProducers,
            description: actDescription,
            song: actSong
        }

        actsArray.push(actObject)
        nodeCount++
    }

    return actsArray
}

function findProducers (HTML, nodeCount) {
    let producerSectionLength = $('#block-system-main > div > article > div > div > div > div:nth-child(' + nodeCount + ') > article > div > div.field.field-name-field-contributor.field-type-entityreference.field-label-above > div', HTML).children().length
    let producerNodeCount = 1
    let producerArray = []

    for (let producersToScrape = 0; producersToScrape < producerSectionLength; producersToScrape++) {
        let currentProducer = $('#block-system-main > div > article > div > div > div > div:nth-child(' + nodeCount + ') > article > div > div.field.field-name-field-contributor.field-type-entityreference.field-label-above > div > div:nth-child(' + producerNodeCount + ')', HTML).text()

        producerArray.push(currentProducer)
        producerNodeCount++
    }

    return producerArray
}


getLatestEpisodeAndPushResults();