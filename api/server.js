const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

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

app.get("/loanpools", (req, res) => {
    console.log("Showing available loans");
});

app.post("/loanpools", (req, res) => {
    console.log("Adding a loan to the available loan pools");
});

app.put("/loanpools/:id", (req, res) => {
    console.log("Editing a loan in the loan pools");
});

app.delete("/loanpools/:id", (req, res) => {
    console.log("Removing a loan from the available loan pools")
});

// CRUD operations for the applications to loans in the loan pool. (updates not allowed)

app.get("/applications", (req, res) => {
    console.log("Showing active loan applications")
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

app.get("balance/:id", (req,res) => {
    console.log("Showing a user's balance");
});

app.post("balance/:id", (req, res) => {
    console.log("Initializing a user's balance");
});

app.put("balance/:id", (req,res) => {
    console.log("Updating a user's balance");
});

//all endpoints should go above here
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})