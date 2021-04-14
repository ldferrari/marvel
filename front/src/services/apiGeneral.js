const ts = "1618100562";
const publicKey = "2eb0a4ac22e5b11aaddf0756a54841ee";
const md5 = "5140f191abeb406178be7dc51850d8ae";

export const apiGeneral = async (urlSlice) => (
  fetch(`${urlSlice}?ts=${ts}&apikey=${publicKey}&hash=${md5}`)
  .then((comic) => comic.json().then((data) => data.data.results))
);
