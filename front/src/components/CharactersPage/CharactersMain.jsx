import React, { useContext } from 'react';
import CharactersCard from './CharactersCard';
import AppContext from '../../context/AppContext';

export default function CharactersMain() {
  const { charactersItens } = useContext(AppContext);
  return (
    <div className="listItens">
      {charactersItens.map((characterItens) => (
        <CharactersCard key={ characterItens.id } characterItens={ characterItens } />
      ))}
    </div>
  );
}

