import axios from "axios";

const baseUrl = process.env.REACT_APP_SERVER_URL;

export const getSchools = async () => {
  try {
    const res = await axios.get(`${baseUrl}/schools`);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const getSchool = async (id) => {
  try {
    const res = await axios.post(`${baseUrl}/school`, { id });
    return await res.data;
  } catch (e) {
    console.log(e);
  }
};

export const addNewUser = async (email) => {
  try {
    const res = await axios.post(`${baseUrl}/createUser`, { email });
    return await res.data;
  } catch (e) {
    console.log(e);
  }
};

export const findUserByEmail = async (email) => {
  try {
    const res = await axios.post(`${baseUrl}/user`, { email });
    return await res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getSchoolReviews = async (SchoolId) => {
  try {
    const res = await axios.post(`${baseUrl}/schoolReviews/${SchoolId}`);
    return await res.data;
  } catch (e) {
    console.log(e);
  }
};

export const addSchool = async (name, lat, lng) => {
  try {
    const res = await axios.post(`${baseUrl}/createSchool`, { name, lat, lng });
    return await res.data;
  } catch (e) {
    console.log(e);
  }
};

export const createReview = async (
  facility,
  staff,
  services,
  comment,
  UserId,
  SchoolId
) => {
  try {
    const overall = ((+facility + +staff + +services) / 3).toFixed(1);
    const res = await axios.post(`${baseUrl}/createReview`, {
      facility,
      staff,
      services,
      overall: +overall,
      comment,
      UserId,
      SchoolId,
    });
    return await res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getUserReviews = async (UserId) => {
  try {
    const res = await axios.post(`${baseUrl}/userReviews`, { UserId });
    return await res.data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteReview = async (id) => {
  try {
    return await axios.delete(`${baseUrl}/deleteReview/${id}`);
  } catch (e) {
    console.log(e);
  }
};

export const getUser = async (token) => {
  try {
    const res = await axios.get(`${baseUrl}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.data;
  } catch (e) {
    console.log(e);
  }
};
