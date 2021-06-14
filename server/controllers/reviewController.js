/* eslint-disable no-console */
const db = require("../models/index");

const getUserReviews = async (req, res) => {
  try {
    const { UserId } = req.body;
    const reviews = await db.Review.findAll({ where: { UserId } });
    res.json(reviews).status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const createReviewOrUpdate = async (req, res) => {
  try {
    const { facility, staff, services, overall, comment, UserId, SchoolId } =
      req.body;

    const foundReview = await db.Review.findOne({
      where: { SchoolId, UserId },
    });
    if (!foundReview) {
      const newReview = await db.Review.create({
        facility,
        staff,
        services,
        overall,
        comment,
        UserId,
        SchoolId,
      });
      res.json(newReview).status(201);
    }
    const updatedReview = await db.Review.update(
      { facility, staff, services, overall, comment, UserId, SchoolId },
      { where: { id: foundReview.id } }
    );
    res.json(updatedReview).status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const getSchoolReviews = async (req, res) => {
  try {
    const { SchoolId } = req.params;
    const reviews = await db.Review.findAll({ where: { SchoolId } });
    res.json(reviews).status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    await db.Review.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = {
  getUserReviews,
  createReviewOrUpdate,
  getSchoolReviews,
  deleteReview,
};
