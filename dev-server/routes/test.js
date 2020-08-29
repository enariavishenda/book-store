const express = require('express');
const router = express.Router();

router.get('/test', function(req, res, next) {
    res.json({
        id: 1,
        email: "test",
        password: "test",
        icon: 'test'
    });
});

module.exports = router;
