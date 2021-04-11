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

const postNewLoanPool = (request, response) => {
    const { duration, principal, interest } = request.body;
    pool.query("INSERT INTO loans (duration, pincipal, interest) VALUES $1, $2, $3", [duration, principal, interest], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`Loan created.`)
    })
}

const updateLoanInPool = (request, response) => {
    const id = parseInt(request.params.id);
    const { duration, principal, interest } = request.body;
    pool.query("UPDATE loans SET duration = $1, pincipal = $2, interest = $3 WHERE id = $4", [duration, principal, interest, id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`Loan updated.`)
    }) 
}

//implement app.delete(/loanpools/:id)
const deleteLoan = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query("DELETE FROM loans WHERE loan_id = $1", [id], (error, results) => {
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