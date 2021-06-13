const router = require("express").Router();
const { checkJwt } = require("./auth/checkJwt");

const controller = require("./controllers/controllers");

router.get("/schools", controller.getAllSchools);
router.get("/users", checkJwt, controller.getAllUsers);

router.post("/userReviews", controller.getUserReviews);
router.post("/user", controller.getUser);
router.post("/schoolReviews/:SchoolId", controller.getSchoolReviews);
router.post("/createUser", controller.createUser);
router.post("/createSchool", controller.createSchool);
router.post("/createReview", controller.createReviewOrUpdate);

router.delete("/deleteReview/:id", controller.deleteReview);

module.exports = router;
