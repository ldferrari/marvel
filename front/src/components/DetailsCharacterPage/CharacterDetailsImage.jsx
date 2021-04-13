import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function CharacterDetailsImage() {
  const { characterData } = useContext(AppContext);
  return (
    <div className="detailsImage">
      {characterData[0]&&
        <img
        src={ characterData[0].thumbnail.path+'.'+characterData[0].thumbnail.extension }
        className="cardImage"
        alt={ characterData[0].name }
        />
      }
    </div>
  );
}
