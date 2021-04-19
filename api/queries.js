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


//implement app.get(/loanpools)
const getLoanPools = (request, response) => {
    pool.query("SELECT * FROM loans", (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

//implement app.post(/loanpools)
const postNewLoanPool = (request, response) => {
    const { duration, principal, interest } = request.body;
    pool.query("INSERT INTO loans (duration, pincipal, interest) VALUES $1, $2, $3", [duration, principal, interest], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`Loan created.`)
    })
}

//implement app.put(/loanpools/:id)
const updateLoanInPool = (request, response) => {
    const id = parseInt(request.params.id);
    const { duration, principal, interest } = request.body;
    pool.query("UPDATE loans SET duration = $1, pincipal = $2, interest = $3 WHERE id = $4", [duration, principal, interest, id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`Loan updated.`)
    })
    //TODO add query to insert into lends table
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

//implement app.get(/applications/:loanid)
const getApplicationsByLoanId = (request, response) => {
    const loan_id = parseInt(request.params.loan_id);
    pool.query("SELECT * FROM applies WHERE loan_id = $1", [loan_id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
}

//implement app.post(/applications/:loanid/:borrowerid)
const applyForLoanByLoanId = (request, response) => {
    const loan_id = parseInt(request.params.loan_id);
    const user_id = parseInt(request.params.borrower_id);
    pool.query("INSERT INTO applies (borrower_id, loan_id) VALUES $1, $2", [user_id, loan_id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`Applied for loan.`)
    })
}

//implement app.delete(/applications/:loanid/:borrowerid)
const deleteApplicationByLoanId = (request, response) => {
    const loan_id = parseInt(request.params.loan_id);
    const user_id = parseInt(request.params.borrower_id);
    pool.query("DELETE FROM applies where loan_id = $1 AND borrower_id = $2", [loan_id, borrower_id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`Application deleted.`)
    });
}

//implement app.get(/loans/:borrowerid) 
const getActiveLoansByUserId = (request, response) => {
    const user_id = parseInt(request.params.user_id);
    pool.query("SELECT loans.* FROM loans, borrows WHERE borrows.borrower_id = $1 AND borrows.loan_id = loan.loan_id", [user_id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

//implement app.post(/loans/:loanid/:borrowerid)
const addLoanToBorrowerAccountById = (request, response) => {
    const loan_id = parseInt(request.params.loan_id);
    const user_id = parseInt(request.params.borrower_id);
    pool.query("DELETE FROM applies where loan_id = $1 AND borrower_id = $2", [loan_id, borrower_id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`Application accepted.`)
    });
    pool.query("INSERT INTO borrows (borrower_id, loan_id) VALUES $1, $2", [user_id, loan_id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`Loan account created..`)
    });
}

//implement app.put(/loans/:loanid/:borrowerid)
const updateAmountDue = (request, response) => {
    const amountPaid = parseInt(request.params.amountPaid);
    const loan_id = parseInt(request.params.loan_id);
    const user_id = parseInt(request.params.borrower_id);
    pool.query("UPDATE borrows SET amount_due = amount_due - $1 WHERE borrower_id = $2 AND loan_id = $3", [amountPaid, user_id, loan_id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`Paid ${amountPaid}`);
    });
}

//implement app.delete(/loans/:loanid/:borrowerid)
const closeLoan = (request, response) => {
    const loan_id = parseInt(request.params.loan_id);
    const user_id = parseInt(request.params.borrower_id);
    pool.query("DELETE from borrows WHERE borrower_id = $1 AND loan_id = $2 AND amount_due = 0", [user_id, loan_id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`Loan is paid off. It has been removed from your dashboard.`)
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
    updateBalanceById,
    getApplicationsByLoanId,
    applyForLoanByLoanId,
    deleteApplicationByLoanId,
    getActiveLoansByUserId,
    addLoanToBorrowerAccountById,
    updateAmountDue,
    closeLoan
}