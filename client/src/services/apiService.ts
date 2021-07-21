import axios, { AxiosResponse } from "axios";

const baseUrl = process.env.REACT_APP_SERVER_URL;

export const getSchools = async (): Promise<AxiosResponse> => await axios.get(`${baseUrl}/schools`);

export const getSchool = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/school`, {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  } catch (e) {
    console.log(e);
  }
};

export const addNewUser = async (email) => {
  try {
    const res = await fetch(`${baseUrl}/createUser`, {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  } catch (e) {
    console.log(e);
  }
};

export const findUserbyEmail = async (email) => {
  try {
    const res = await fetch(`${baseUrl}/user`, {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  } catch (e) {
    console.log(e);
  }
};

export const getSchoolReviews = async (SChoolId) => {
  try {
    const res = await fetch(`${baseUrl}/schoolReviews/${SChoolId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  } catch (e) {
    console.log(e);
  }
};

export const addSchool = async (name, lat, lng) => {
  try {
    const res = await fetch(`${baseUrl}/createSchool`, {
      method: "POST",
      body: JSON.stringify({ name, lat, lng }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
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
    const res = await fetch(`${baseUrl}/createReview`, {
      method: "POST",
      body: JSON.stringify({
        facility,
        staff,
        services,
        overall: +overall,
        comment,
        UserId,
        SchoolId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  } catch (e) {
    console.log(e);
  }
};

export const getUserReviews = async (UserId) => {
  try {
    const res = await fetch(`${baseUrl}/userReviews`, {
      method: "POST",
      body: JSON.stringify({ UserId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  } catch (e) {
    console.log(e);
  }
};

export const deleteReview = async (id) => {
  try {
    return await fetch(`${baseUrl}/deleteReview/${id}`, {
      method: "DELETE",
    });
  } catch (e) {
    console.log(e);
  }
};

export const getUser = async (token) => {
  try {
  const res = await fetch(`${baseUrl}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.json();
    } catch (e) {
      console.log(e);
    }
}