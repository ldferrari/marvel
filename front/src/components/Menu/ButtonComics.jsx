import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonComics() {
  return (
    <Link
      to="/comics"
      className="buttonLateral"
    >
      <button>
        Comics
      </button>
    </Link>
  );
}