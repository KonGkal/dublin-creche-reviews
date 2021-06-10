const baseUrl = 'http://localhost:3001';

async function getSchools () {
  try {
    const res = await fetch(`${baseUrl}/schools`);
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  getSchools,
}