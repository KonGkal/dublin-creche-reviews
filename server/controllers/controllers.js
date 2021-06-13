/* eslint-disable no-console */
const db = require("../models/index");

const getAllUsers = async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.json(users).status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

// DELETE WHEN FRONTEND IS FIXED
const getAllReviews = async (req, res) => {
  try {
    const reviews = await db.Review.findAll();
    res.json(reviews).status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const getAllSchools = async (req, res) => {
  try {
    const schools = await db.School.findAll();
    res.json(schools).status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const createUser = async (req, res) => {
  try {
    const { email } = req.body;
    const newUser = await db.User.create({ email });
    res.json(newUser).status(201);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const createSchool = async (req, res) => {
  try {
    const { name, address } = req.body;
    const newSchool = await db.School.findOrCreate({
      where: { name, address },
    });
    res.json(newSchool).status(201);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const createReviewOrUpdate = async (req, res) => {
  try {
    const { facility, staff, services, comment, UserId, SchoolId } = req.body;

    const foundReview = await db.Review.findOne({
      where: { SchoolId, UserId },
    });
    if (!foundReview) {
      const newReview = await db.Review.create({
        facility,
        staff,
        services,
        comment,
        UserId,
        SchoolId,
      });
      res.json(newReview).status(201);
    }
    const updatedReview = await db.Review.update(
      { facility, staff, services, comment, UserId, SchoolId },
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

const getUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await db.User.findAll({ where: { email } });
    res.json(user).status(200);
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

const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { facility, staff, services, comment, UserId, SchoolId } = req.body;
    if (comment) {
      const updatedReview = await db.Review.update(
        { facility, staff, services, comment, UserId, SchoolId },
        { where: { id } }
      );
      res.json(updatedReview).status(200);
    } else {
      const updatedReview = await db.Review.update(
        { facility, staff, services, UserId, SchoolId, comment: null },
        { where: { id } }
      );
      res.json(updatedReview).status(200);
    }
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = {
  getAllReviews, // DELETE WHEN FRONTEND IS FIXED
  getAllUsers,
  getAllSchools,
  createUser,
  createSchool,
  createReviewOrUpdate,
  getSchoolReviews,
  deleteReview,
  updateReview,
  getUser,
};
