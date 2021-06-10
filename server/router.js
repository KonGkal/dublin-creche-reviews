const router = require('express').Router();

const controller = require('./controllers/controllers');

router.get('/schools', controller.getAllSchools);
router.get('/users', controller.getAllUsers);
router.get('/reviews', controller.getAllReviews);
router.post('/createUser', controller.createUser);
router.post('/createSchool', controller.createSchool);
router.post('/createReview', controller.createReview);

module.exports = router;