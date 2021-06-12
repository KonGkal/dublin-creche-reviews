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
