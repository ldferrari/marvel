import React, { useContext } from 'react';
import ComicsCard from './ComicsCard';
import AppContext from '../../context/AppContext';

export default function comicsMain() {
  const { comicsItens } = useContext(AppContext);
  return (
    <div className="listItens">
      {comicsItens.map((comicItens) => (
        <ComicsCard key={ comicItens.id } comicItens={ comicItens } />
      ))}
    </div>
  );
}
