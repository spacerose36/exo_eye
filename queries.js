
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'host.docker.internal',
  database: 'postgres',
  password: '0123456',
  port: 5432,
})

const getStars = (request, response) => {
    pool.query('SELECT * FROM stars', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


  module.exports = {getStars}
