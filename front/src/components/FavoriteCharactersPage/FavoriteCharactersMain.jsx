import React from 'react';
import CharacteresCard from '../CharactersPage/CharactersCard';

export default function characteresMain() {
  const characteresItens = JSON.parse(localStorage.getItem('favoriteCharacter')) || null;
  return (
    <div className="listItens">
      {characteresItens.map((characterItens) => (
        <CharacteresCard key={ characterItens.id } characterItens={ characterItens } />
      ))}
    </div>
  );
}
