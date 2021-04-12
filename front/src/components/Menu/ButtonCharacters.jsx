import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonCharacter() {
  return (
    <Link
      to="/characters"
    >
      <button className="buttonMenu">
        Personagens
      </button>
    </Link>
  );
}
