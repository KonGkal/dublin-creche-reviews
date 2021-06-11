// import { useAuth0 } from "@auth0/auth0-react";
const baseUrl = process.env.REACT_APP_SERVER_URL;

// const { getAccessTokenSilently } = useAuth0;

export const getSchools = async () => {
  try {
    const res = await fetch(`${baseUrl}/schools`);
    return await res.json();
  } catch (e) {
    console.log(e);
  }
};

// export const getAllUsers = async () => {
//   try {
//     const token = await getAccessTokenSilently();

//     const res = await fetch(`${baseUrl}/users`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return res.json();
//   } catch (e) {
//     console.log(e);
//   }
// };

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

// module.exports = {
//   getSchools,
//   getAllUsers,
//   addNewUser,
//   findUserbyEmail,
// };
