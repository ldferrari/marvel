import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function CharacterDatailsDescipton() {
  const { characterData } = useContext(AppContext);
  const characterDt = characterData[0];
  return (
    <div className="datailsDescription">
      {characterDt&&
        characterDt.description
      }
    </div>
  );
}