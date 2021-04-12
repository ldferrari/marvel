import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginButtonRegister() {
  return (
    <div className="semContaDiv">
      <button
        type="button"
        className="semContaButton"
      >
        <Link to="/register" className="link">Abra sua conta</Link>
      </button>
    </div>
  );
}
