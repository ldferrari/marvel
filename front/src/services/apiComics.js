const APIurl = 'http://localhost:3001/comics';

const apiComics = async () => fetch(APIurl)
  .then((products) => products.json().then((data) => data));

apiComics();

export default apiComics;
