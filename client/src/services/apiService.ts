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

export const getSchool = async (id: string) => {
  try {
    const res = await axios.post(`${baseUrl}/school`, { id });
    return await res.data;
  } catch (e) {
    console.log(e);
  }
};

export const addNewUser = async (email: string) => {
  try {
    const res = await axios.post(`${baseUrl}/createUser`, { email });
    return await res.data;
  } catch (e) {
    console.log(e);
  }
};

export const findUserByEmail = async (email: string) => {
  try {
    const res = await axios.post(`${baseUrl}/user`, { email });
    return await res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getSchoolReviews = async (SchoolId: string) => {
  try {
    const res = await axios.post(`${baseUrl}/schoolReviews/${SchoolId}`);
    return await res.data;
  } catch (e) {
    console.log(e);
  }
};

export const addSchool = async (name: string, lat: number, lng: number) => {
  try {
    const res = await axios.post(`${baseUrl}/createSchool`, { name, lat, lng });
    return await res.data;
  } catch (e) {
    console.log(e);
  }
};

export const createReview = async (
  facility: string,
  staff: string,
  services: string,
  comment: string,
  UserId: string,
  SchoolId: string
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

export const getUserReviews = async (UserId: string) => {
  try {
    const res = await axios.post(`${baseUrl}/userReviews`, { UserId });
    return await res.data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteReview = async (id: number) => {
  try {
    return await axios.delete(`${baseUrl}/deleteReview/${id}`);
  } catch (e) {
    console.log(e);
  }
};

export const getUser = async (token: any) => {
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
