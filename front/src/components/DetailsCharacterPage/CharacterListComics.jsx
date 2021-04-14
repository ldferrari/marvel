import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import { apiGeneral } from '../../services/apiGeneral';
import ComicsCard from '../ComicsPage/ComicsCard';

export default function CharacterListComics() {
  const { characterData } = useContext(AppContext);
  const [comicLocal, setComicLocal] = useState();

  useEffect( async() => {
    if( characterData[0] !== undefined) {
      const creatArray = characterData[0].comics.items.map((urlSlice) => {
          return apiGeneral(urlSlice.resourceURI);
      }); 
      const resultado = await Promise.all(creatArray)
      setComicLocal(resultado.map((el) => el[0]));
    }
  }, [characterData[0]])
  
  return (
    <div>
      <div className="titleRelacionados">Quadrinhos Relacionados</div>
      <div className="relacionados">
        {comicLocal&&
          comicLocal.map((comicItens) => 
          <ComicsCard key={ comicItens.id } comicItens={ comicItens } />
          )
        }
      </div>
    </div>
  );
}
