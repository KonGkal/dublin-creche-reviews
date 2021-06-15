/* eslint-disable no-console */
const db = require("../models/index");

const getAllSchools = async (req, res) => {
  try {
    const schools = await db.School.findAll();
    res.json(schools).status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const getSchool = async (req, res) => {
  try {
    const { id } = req.body;
    const school = await db.School.findOne({
      where: { id },
    });
    res.json(school).status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const createSchool = async (req, res) => {
  try {
    const { name, lat, lng } = req.body;
    const newSchool = await db.School.findOrCreate({
      where: { name, lat, lng },
    });
    res.json(newSchool).status(201);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = {
  getAllSchools,
  getSchool,
  createSchool,
};
