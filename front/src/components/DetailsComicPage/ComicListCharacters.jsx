import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import { apiGeneral } from '../../services/apiGeneral';
import CharactersCard from '../CharactersPage/CharactersCard';

export default function ComicListCharacters() {
  const { comicData } = useContext(AppContext);
  const [characterLocal, setCharacterLocal] = useState();

  useEffect( async() => {
    if( comicData[0] !== undefined) {
      const creatArray = comicData[0].characters.items.map((urlSlice) => {
          return apiGeneral(urlSlice.resourceURI);
      }); 
      const resultado = await Promise.all(creatArray)
      setCharacterLocal(resultado.map((el) => el[0]));
    }
  }, [comicData[0]])
  
  return (
    <div>
      <div className="titleRelacionados">Personagens Relacionados</div>
      <div className="relacionados">
        {characterLocal&&
          characterLocal.map((characterItens) => 
          <CharactersCard key={ characterItens.id } characterItens={ characterItens } />
          )
        }
      </div>
    </div>
  );
}