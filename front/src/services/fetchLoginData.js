const URL = 'http://localhost:3001/login';

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
