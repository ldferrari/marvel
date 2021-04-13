import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function ComicDetailsName() {
  const { comicData } = useContext(AppContext);
  const comicDt = comicData[0];
  return (
    <div className="detailsNameTitle detailsTitle">
      {comicDt&&
        comicDt.title
      }
    </div>
  );
}
