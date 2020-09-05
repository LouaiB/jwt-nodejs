const express = require('express');
const router = express.Router();
const { ensureAuthenticated, ensureHasRoles } = require('../auth-middleware');

router.get('/any', async (req, res) => {
    return res.json({ message: "test GET any", data: [] });
});

router.get('/auth', ensureAuthenticated, async (req, res) => {
    return res.json({ message: "test GET ensureAuthenticated", data: [] });
});

module.exports = router;