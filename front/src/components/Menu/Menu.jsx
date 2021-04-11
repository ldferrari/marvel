import React, { useContext } from 'react';
import ButtonConfig from './ButtonConfig'
import ButtonComics from './ButtonComics';
import ButtonCharacters from './ButtonCharacters';
import ButtonLogout from './ButtonLogout';
import AppContext from '../../context/AppContext';

export default function MenuLateral() {
  const { userData } = useContext(AppContext);
  console.log(userData);
  return (
    <div className="side-menu-container">
      <div>
        <ButtonConfig />
        {userData.name}
      </div>
      <ButtonComics />
      <ButtonCharacters />
      <ButtonLogout />
    </div>
  );
}
