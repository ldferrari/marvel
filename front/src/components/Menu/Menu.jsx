import React, { useContext } from 'react';
import ButtonConfig from './ButtonConfig'
import RoteButton from '../RoteButton';
import ButtonLogout from './ButtonLogout';
import AppContext from '../../context/AppContext';
import marvelMenu from '../../image/marvelMenu.svg';
import '../../css/menu.css';

export default function MenuLateral() {
  const { userData } = useContext(AppContext);
  return (
    <div className="sideMenuContainer">
      <div className="menuUserDate">
        <ButtonConfig />
        <div className="name">
          {userData.name}
        </div>
      </div>
      <div className="menuCenter">
        <img src={marvelMenu} className="marvelMenuImage" />
        <div className="menuButtonsCenter">
          <RoteButton texto={ "Personagens" } rota={ "/characters" } />
          <RoteButton texto={ "Quadrinhos" } rota={ "/comics" } />
          <RoteButton texto={ "Personagens Favoritos" } rota={ "/favorite_characters" } />
          <RoteButton texto={ "Quadrinhos Favoritos" } rota={ "/favorite_comics" } />
        </div>
      </div>
      <div className="menuButtonsRight">
        <ButtonLogout />
      </div>
    </div>
  );
}
