import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function CharacterDetailsName() {
  const { characterData } = useContext(AppContext);
  const characterDt = characterData[0];
  return (
    <div className="detailsNameTitle detailsName">
      {characterDt&&
        characterDt.name
      }
    </div>
  );
}
