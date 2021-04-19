const db = require('./dbconfig');
const Pool = require('pg').Pool


const pool = new Pool({
  user: db.user,
  host: db.host,
  database: db.database,
  password: db.password,
  port: db.port
});

module.exports = pool;

/*
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
        response.status(201).send(`Loan created.`)
    })
}

const updateLoanInPool = (request, response) => {
    const id = parseInt(request.params.id);
    const { duration, principal, interest } = request.body;
    pool.query("UPDATE loans SET duration = $1, pincipal = $2, interest = $3 WHERE id = $4", [duration, principal, interest, id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`Loan updated.`)
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

//implement app.get(/balance/:user_id)
const getBalanceById = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query("SELECT balance FROM users WHERE user_id = $1", [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

//implement app.post(/balance/:user_id)
const postBalanceById = (request, response) => {
    const id = parseInt(request.params.id);
    const balance = parseInt(request.params.balance) || 0;
    pool.query("INSERT INTO users (balance) VALUES $1 WHERE user_id = $2", [balance, id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`Balance initialized.`);
    });
}

//implement app.put(/balance/:user_id)
const updateBalanceById = (request, response) => {
    const id = parseInt(request.params.id);
    const newBalance = parseInt(request.params.balance) || 0;
    pool.query("UPDATE users SET balance = $1 WHERE user_id = $2", [newBalance, id], (error, results) => {
        if (error){
            throw error;
        }
        response.status(201).send(`Balance updated to ${newBalance}.`)
    });
}



//update this with every new function
module.exports = {
    getLoanPools,
    deleteLoan,
    updateLoanInPool,
    postNewLoanPool,
    getBalanceById,
    postBalanceById,
    updateBalanceById
}

*/