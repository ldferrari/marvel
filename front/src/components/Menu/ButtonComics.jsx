import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonComics() {
  return (
    <Link
      to="/comics"
    >
      <button className="buttonMenu">
        Comics
      </button>
    </Link>
  );
}