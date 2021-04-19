const express = require("express");
const bodyParser = require("body-parser");
const queries = require("./queries");
const cors = require("cors")
const PORT = process.env.PORT || 3080;
const app = express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

//ROUTE//
//signin and signup

app.use("/authentication", require("../api/routes/jwtAuth"));

app.use("/dashboard", require("../api/routes/dashboard"));

app.use("/api", require("../api/routes/dashboard"));



/*
app.get("/", (req, res) => {
    console.log("Hello from server");
});

// CRUD operations for loan pools, or the loans that are available to be applied for.

app.get("/loanpools", queries.getLoanPools);
app.post("/loanpools", queries.postNewLoanPool);
app.put("/loanpools/:id", queries.updateLoanInPool);
app.delete("/loanpools/:id", queries.deleteLoan);

// CRUD operations for the applications to loans in the loan pool. (updates not supported)

app.get("/applications/:loan_id", queries.getApplicationsByLoanId);
app.post("/applications/:loan_id/:borrowerid", queries.applyForLoanByLoanId);
app.delete("/applications/:loanid/:borrowerid", queries.deleteApplicationByLoanID);

// CRUD operations for approved loans, or loans where the application was accepted.

app.get("/loans/:borrowerid", (req,res) => {
    console.log("Showing active approved loans for a borrower");
});

app.post("/loans/:borrowerid", (req, res) => {
    console.log("Adding a loan to borrower's approved loans after an application is approved");
});

app.put("/loans/:borrowerid/:loanid", (req,res) => {
    console.log("Updating an active loan after a payment is made");
});

app.delete("/loans/:borrowerid/:loanid", (req,res) => {
    console.log("Removing a loan from borrower's active loans after a loan is paid off");
});

// CRUD operations for a user's balance. (delete not supported)

app.get("balance/:user_id", queries.getLoanById);
app.post("balance/:user_id", queries.postBalanceById);
app.put("balance/:user_id", updateBalanceById);

*/

//all endpoints should go above here
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});