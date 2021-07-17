const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to Vildy Video Renting Services!');
});

module.exports = router;