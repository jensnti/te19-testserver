const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index.njk', {
        title: 'Te 19',
        layout: 'layout.njk',
    });
});

module.exports = router;
