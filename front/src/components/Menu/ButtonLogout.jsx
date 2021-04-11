import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';

export default function ButtonLogout() {
  const { setUserData } = useContext(AppContext);
  return (
    <Link
      to="/login"
      className="buttonLateral"
      onClick={ () => {
        localStorage.setItem('token', '');
        setUserData([]);
      } }
    >
      <button>
        Logout
      </button>
    </Link>
  );
}
