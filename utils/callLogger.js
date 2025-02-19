const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

module.exports = router;