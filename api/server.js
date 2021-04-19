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

// CRUD operations for both account types. (Update, Delete not supported)

app.get("/lenders/:lenderid", (req,res) => {
    console.log("Getting lender account data");
});

app.get("borrowers/:borrowerid", (req,res) => {
    console.log("Getting borrower account data");
});

app.post("/lenders", (req, res) => {
    console.log("Creating new bank manager pofile");
});

app.post("/borrowers", (req, res) => {
    console.log("Creating new borrower account");
});

// CRUD operations for loan pools, or the loans that are available to be applied for.

app.get("/loanpools", queries.getLoanPools);
app.post("/loanpools", queries.postNewLoanPool);
app.put("/loanpools/:id", queries.updateLoanInPool);
app.delete("/loanpools/:id", queries.deleteLoan);

// CRUD operations for the applications to loans in the loan pool. (updates not allowed)

app.get("/applications/:loanid", (req, res) => {
    console.log("Showing an active loan's applications")
});

app.post("/applications", (req, res) => {
    console.log("Applying for a loan")
});

app.delete("/applications/:id", (req, res) => {
    console.log("Denying an application");
});

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

app.get("balance/:id", queries.getLoanById);
app.post("balance/:id", queries.postBalanceById);
app.put("balance/:id", updateBalanceById);

*/

//all endpoints should go above here
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});