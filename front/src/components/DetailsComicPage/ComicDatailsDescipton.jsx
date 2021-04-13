import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function ComicDatailsDescipton() {
  const { comicData } = useContext(AppContext);
  const comicDt = comicData[0];
  return (
    <div className="datailsDescription">
      {comicDt&&
        comicDt.description
      }
    </div>
  );
}
