import React from 'react';
import { Link } from 'react-router-dom';
import configButton from '../../image/configButton.png';

export default function ButtonConfig() {
  return (
    <Link
      to="/profile"
      className="link-config"
    >
      <button className="button-config">
        <img src={ configButton } className="img-config" />
      </button>
    </Link>
  );
}