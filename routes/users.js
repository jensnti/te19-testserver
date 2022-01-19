const express = require('express');
const router = express.Router();
const pool = require('../database');

/* GET users listing. */
router.get('/', async (req, res, next) => {
    await pool
        .promise()
        .query('SELECT * FROM users')
        .then(([rows, fields]) => {
            res.json({
                data: rows,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: 'Database error',
            });
        });
});

module.exports = router;
