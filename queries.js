const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "containers-us-west-207.railway.app",
  database: "railway",
  password: "g7vWnVKvF2Qe3wX1ZA55",
  port: 7012,
});

const getStars = (request, response) => {
  executeQuery("SELECT * FROM stars");
};

const getPlanets = (request, response) => {
  executeQuery("SELECT * FROM planets");
};

const executeQuery = (query) => {
  pool.query(query, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = { getStars, getPlanets };
