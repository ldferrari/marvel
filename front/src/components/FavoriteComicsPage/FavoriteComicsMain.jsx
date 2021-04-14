import React from 'react';
import ComicsCard from '../ComicsPage/ComicsCard';

function findFavorite(comicsItens) {
  if(comicsItens) {
    return (
    <div className="listItens">
      {comicsItens.map((comicItens) => (
        <ComicsCard key={ comicItens.id } comicItens={ comicItens } />
      ))}
    </div>
    );
  }
  return <div className="inexist">Favorito Inexistente</div>;
}

export default function comicsMain() {
  const comicsItens = JSON.parse(localStorage.getItem('favoriteComic')) || null;
  return (
    findFavorite(comicsItens)
  );
}
