const router = require("express").Router();

const controller = require("./controllers/controllers");

router.get("/schools", controller.getAllSchools);
router.get("/users", controller.getAllUsers);
router.get("/reviews", controller.getAllReviews);

router.post("/schoolReviews/:SchoolId", controller.getSchoolReviews);
router.post("/createUser", controller.createUser);
router.post("/createSchool", controller.createSchool);
router.post("/createReview", controller.createReview);

router.delete("/deleteReview/:id", controller.deleteReview);
router.put("/updateReview/:id", controller.updateReview);

module.exports = router;
