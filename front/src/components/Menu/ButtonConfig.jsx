import React from 'react';
import { Link } from 'react-router-dom';
import configButton from '../../image/configButton.png';

export default function ButtonConfig() {
  return (
    <Link
      to="/characters"
      className="buttonLateral"
    >
      <button>
        <img src={ configButton } />
      </button>
    </Link>
  );
}