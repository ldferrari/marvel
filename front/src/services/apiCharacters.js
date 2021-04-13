const ts = "1618100562";
const publicKey = "2eb0a4ac22e5b11aaddf0756a54841ee";
const md5 ="5140f191abeb406178be7dc51850d8ae";

export const apiCharacters = async () => (
  fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${md5}`)
  .then((charactersAll) => charactersAll.json().then((data) => data.data.results))
);

export const apiCharacterByID = async (id) => (
  fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${md5}`)
  .then((character) => character.json().then((data) => data.data.results))
);
