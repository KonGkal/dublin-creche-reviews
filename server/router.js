const router = require("express").Router();
const { checkJwt } = require("./auth/checkJwt");

const schoolController = require("./controllers/schooController");
const userController = require("./controllers/userController");
const reviewController = require("./controllers/reviewController");

router.get("/schools", schoolController.getAllSchools);
router.get("/users", checkJwt, userController.getAllUsers);

router.post("/userReviews", reviewController.getUserReviews);
router.post("/user", userController.getUser);
router.post("/schoolReviews/:SchoolId", reviewController.getSchoolReviews);
router.post("/createUser", userController.createUser);
router.post("/createSchool", schoolController.createSchool);
router.post("/createReview", reviewController.createReviewOrUpdate);

router.delete("/deleteReview/:id", reviewController.deleteReview);

module.exports = router;
