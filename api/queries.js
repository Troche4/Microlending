const Pool = require('pg').Pool
const db = require('dbconfig');
const pool = new Pool({
  user: db.user,
  host: db.host,
  database: db.database,
  password: db.password,
  port: db.port,
})

//implement app.get(/loanpools)
const getLoanPools = (request, response) => {
    pool.query("SELECT * FROM loans", (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}


//implement app.delete(/loanpools/:id)
const deleteLoan = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query("DELETE FROM loans WHERE laon_id = $1", [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`Loan deleted with id: ${id}`);
    })
}

//update this with every new function
module.exports = {
    getLoanPools,
    deleteLoan,
}