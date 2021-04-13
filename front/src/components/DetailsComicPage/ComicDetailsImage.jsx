import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function ComicDetailsImage() {
  const { comicData } = useContext(AppContext);
  return (
    <div className="detailsImage">
      {comicData[0]&&
        <img
        src={ comicData[0].thumbnail.path+'.'+comicData[0].thumbnail.extension }
        className="cardImage"
        alt={ comicData[0].name }
        />
      }
    </div>
  );
}
