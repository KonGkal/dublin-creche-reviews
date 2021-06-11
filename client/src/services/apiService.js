const baseUrl = "http://localhost:3001";

async function getSchools() {
  try {
    const res = await fetch(`${baseUrl}/schools`);
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}

async function getAllUsers() {
  try {
    const res = await fetch(`${baseUrl}/users`);
    return res.json();
  } catch (e) {
    console.log(e);
  }
}

async function addNewUser(email) {
  console.log(email);
  const password = "string";
  try {
    const res = await fetch(`${baseUrl}/createUser`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  getSchools,
  getAllUsers,
  addNewUser,
};
