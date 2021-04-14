import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import ButtonConfig from './ButtonConfig';
import ButtonSide from './ButtonSide';
import AppContext from '../../context/AppContext';
import marvelMenu from '../../image/marvelMenu.svg';
import '../../css/menu.css';

function menuChecked(changeState) {
  if (document.getElementById('check').checked) {
    changeState(true);
  }
  if (!document.getElementById('check').checked) {
    changeState(false);
  }
}

export default function Menu({ title }) {
  const [isVisible, setIsVisible] = useState(false);
  const { userData } = useContext(AppContext);
  return (
    <div className="menu-top">
      <label className="top-hamburguer" htmlFor="check">
        &#9776;
        <input
          type="checkbox"
          className="check"
          id="check"
          onChange={ () => menuChecked(setIsVisible) }
        />
      </label>
      <div className="menu-center">
        <img src={ marvelMenu } className="marvel-menu-image" />
        <div className="menu-title">{ title }</div>
        <div className="name-login">
          {userData.name}
        </div>
      </div>
      <ButtonConfig />
      {isVisible && (<ButtonSide />)}
    </div>
  );
}

Menu.propTypes = {
  title: PropTypes.string,
};
