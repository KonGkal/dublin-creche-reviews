const baseUrl = process.env.REACT_APP_SERVER_URL;

export const getSchools = async () => {
  try {
    const res = await fetch(`${baseUrl}/schools`);
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

export const addSchool = async (name, address) => {
  try {
    const res = await fetch(`${baseUrl}/createSchool`, {
      method: "POST",
      body: JSON.stringify({ name, address }),
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
        overall,
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
