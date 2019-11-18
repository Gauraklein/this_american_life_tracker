## The Unofficial 'This American Life' Tracker
*A full stack web application that allows users to mark which episodes of 'This American Life' they have listened to as well as rate the episodes*

---

(Screenshot/gif)

---

A couple of months ago I bought access to the full archive of 'This American Life'. After listening for a couple of weeks I realized that I was having trouble keeping track of which episodes I had already listened to with over 600 episodes at the time of development I felt that this would be a good problem to solve with .....*code!*

The first thing I decided to do was build a database with every episode and it's metadata. This was a little difficult as the people who make decisions over at 'This American Life' don't have that information publicly available. I eventually ended up building a scraper using puppeteer.js and cheerio.js which you can find [here](https://github.com/Gauraklein/this_american_life_scraper). 

After obtaining the data I used Knex.js and Postgresql to create my database. My backend is built with Node.js and Express.js handles the routing. For the frontend I decided to go with React and Redux.

### TLDR
Wanted a simple way to track which episodes of 'This American Life' I've already listened to.

---

### Features

- Mark which episodes you have listened to
- Rate episodes
- Get recommended episodes based on user rating

---

### Technologies used

**Backend**
- Postgresql
- Node.js
- Express.js
- Knex.js
- Passport.js
- nodemon

**Frontend**
- React.js
- Redux

