const port = process.env.PORT || 3001;

const fetchUpdateUser = (id, body) => fetch(`http://localhost:${port}/profile/${id}`, {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
}).then((response) => response.json().then((data) => data));

export default fetchUpdateUser;