const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");

router.get('/roles', async (req, res) => {
    const roles = await  pool.query("SELECT * FROM user_role");
    res.json(roles.rows);
})

router.get('/loans', async (req, res) => {
    const loans = await  pool.query("SELECT * FROM loans");
    res.json(loans.rows);
})

router.post("/", authorize, async (req, res) => {
    try {
        const user = await pool.query(
            "SELECT * FROM users WHERE user_id = $1",
            [req.user.id]
        );

        res.json(user.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;