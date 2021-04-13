import React, { /* useEffect, useState, */ useContext } from 'react';
import AppContext from '../../context/AppContext';
//import { apiGeneral } from '../../services/apiGeneral';
//import ComicsCard from '../ComicsPage/ComicsCard';

//const key = "?ts=1618100562&apikey=2eb0a4ac22e5b11aaddf0756a54841ee&hash=5140f191abeb406178be7dc51850d8ae"

export default function CharacterListComics() {
  /* const { characterData } = useContext(AppContext);
  const [comicLocal, setComicLocal] = useState(); */
  return (
    <div className="listItens">
      {/* {characterData[0]&&
        characterData[0].comics.items.map((urlSlice) => {
        useEffect( async () => apiGeneral(urlSlice).then((response) => setComicLocal(response)),
        [setComicLocal]);
        <ComicsCard key={ comicsIten.id } comicsIten={ comicsIten } />
      })} */}
    </div>
  );
}
