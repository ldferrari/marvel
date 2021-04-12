import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import '../../css/menu.css';

export default function ButtonLogout() {
  const { setUserData } = useContext(AppContext);
  return (
    <Link
      to="/login"
      onClick={ () => {
        localStorage.setItem('token', '');
        setUserData([]);
      } }
    >
      <button className="buttonMenu">
        Logout
      </button>
    </Link>
  );
}
