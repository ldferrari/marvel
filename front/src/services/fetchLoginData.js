const port = process.env.PORT || 3001;
const URL = `http://localhost:${port}/login`;

const fetchUserData = async (userData) => {
  const response = await fetch(URL, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(userData),
})
  return response.json().then((data) => data);
}

export default fetchUserData;
