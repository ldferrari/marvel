import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonComics() {
  return (
    <Link
      to="/comics"
    >
      <button className="buttonMenu">
        Quadrinhos
      </button>
    </Link>
  );
}