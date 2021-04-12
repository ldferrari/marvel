const ts = "1618100562";
const publicKey = "2eb0a4ac22e5b11aaddf0756a54841ee";
const md5 ="5140f191abeb406178be7dc51850d8ae";

const comicsUrl = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${md5}`;

const apiCharacters = async () => fetch(comicsUrl)
  .then((comicsAll) => comicsAll.json().then((data) => data.data.results));

apiCharacters();

export default apiCharacters;
