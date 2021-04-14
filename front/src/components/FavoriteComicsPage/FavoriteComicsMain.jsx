import React from 'react';
import ComicsCard from '../ComicsPage/ComicsCard';

export default function comicsMain() {
  const comicsItens = JSON.parse(localStorage.getItem('favoriteComic')) || null;
  return (
    <div className="listItens">
      {comicsItens.map((comicItens) => (
        <ComicsCard key={ comicItens.id } comicItens={ comicItens } />
      ))}
    </div>
  );
}
