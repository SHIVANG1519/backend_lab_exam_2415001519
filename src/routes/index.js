const express = require('express');

const homeRoutes = require('./homeRoutes');
const authRoutes = require('./authRoutes');
const courseRoutes = require('./courseRoutes');

const router = express.Router();

router.use('/', homeRoutes);
router.use('/', authRoutes);
router.use('/', courseRoutes);

module.exports = router;