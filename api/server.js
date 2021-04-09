const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.get("/", (req, res) => {
    console.log("Hello from server. Requested endpoint '/'.");
});

//all endpoints should go above here
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})