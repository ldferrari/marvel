import React from 'react';
import CharacteresCard from '../CharactersPage/CharactersCard';

function findFavorite(characteresItens) {
  if(characteresItens) {
    return (
    <div className="listItens">
      {characteresItens.map((characterItens) => (
        <CharacteresCard key={ characterItens.id } characterItens={ characterItens } />
      ))}
    </div>
    );
  }
  return <div className="inexist">Favorito Inexistente</div>;
}


export default function characteresMain() {
  const characteresItens = JSON.parse(localStorage.getItem('favoriteCharacter')) || null;
  return (
    findFavorite(characteresItens)
  );
}
