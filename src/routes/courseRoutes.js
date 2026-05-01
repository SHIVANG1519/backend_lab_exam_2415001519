const express = require('express');

const { getCourses, getProfile, createCourse } = require('../controllers/courseController');
const { loginRequired, instructorOnly } = require('../middleware/auth');

const router = express.Router();

router.get('/courses', loginRequired, getCourses);
router.get('/profile', loginRequired, getProfile);
router.get('/create-course', instructorOnly, createCourse);

module.exports = router;