const db = require('../models/index');

const getAllUsers = async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.json(users).status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

const getAllReviews = async (req, res) => {
  try {
    const reviews = await db.Review.findAll();
    res.json(reviews).status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

const getAllSchools = async (req, res) => {
  try {
    const schools = await db.School.findAll();
    res.json(schools).status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await db.User.create({ email, password });
    res.json(newUser).status(201);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

const createSchool = async (req, res) => {
  try {
    const { name, address } = req.body;
    const newSchool = await db.School.create({ name, address });
    res.json(newSchool).status(201);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

const createReview = async (req, res) => {
  try {
    const { facility, staff, services, comment, UserId, SchoolId } = req.body;

    if (comment) {
      const newReview = await db.Review.create({ facility, staff, services, comment, UserId, SchoolId });
      res.json(newReview).status(201);
    } else {
      const newReview = await db.Review.create({ facility, staff, services, UserId, SchoolId });
      res.json(newReview).status(201);
    }
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

const getSchoolReviews = async (req, res) => {
  try {
    const { SchoolId } = req.params;
    const reviews = await db.Review.findAll({ where: { SchoolId } });
    res.json(reviews).status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    await db.Review.destroy({where: { id } });
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { facility, staff, services, comment, UserId, SchoolId } = req.body;
    if (comment) {
      const updatedReview = await db.Review.update({ facility, staff, services, comment, UserId, SchoolId }, { where: { id } });
      res.json(updatedReview).status(200);
    } else {
      const updatedReview = await db.Review.update({ facility, staff, services, UserId, SchoolId, comment: null }, { where: { id } });
      res.json(updatedReview).status(200);
    }
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

module.exports = {
  getAllReviews,
  getAllUsers,
  getAllSchools,
  createUser,
  createSchool,
  createReview,
  getSchoolReviews,
  deleteReview,
  updateReview
}