const dbConfigs = require("./knexfile.js");
const db = require("knex")(dbConfigs.development);

db.raw("SELECT 1")
.then((result) => {
        console.log("Successfully connected to the database.")
    })
    .catch((err) => {
        console.log("Failed to connect to the database.")
    })

// db.raw(`select *
// from episodes
// where episode_number = 1`)
// .then((result) => {
//   console.log(result.rows)
// })

module.exports = {
  db: db
};