const URL = `https://marvel-back-stone.herokuapp.com/profile`;

const fetchUpdateUser = async (id, body) => {
  const response = await fetch(`${URL}/${id}`, {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
})
  return response.json().then((data) => data);
}

export default fetchUpdateUser;
