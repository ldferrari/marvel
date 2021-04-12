import React from 'react';
import { Link } from 'react-router-dom';
import configButton from '../../image/configButton.png';

export default function ButtonConfig() {
  return (
    <Link
      to="/profile"
      className="linkConfig"
    >
      <button className="buttonConfig">
        <img src={ configButton } className="imgConfig" />
      </button>
    </Link>
  );
}