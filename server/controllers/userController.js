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

module.exports = {
  getAllUsers,
  getUser,
  createUser,
};
