import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import '../css/menu.css';

export default function ButtonLogout(props) {
  const { setUserData } = useContext(AppContext);
  const { rota, texto } = props;
  return (
    <Link
      className="button-general"
      to={ rota }
      onClick={ () => {
        localStorage.setItem('token', '');
        setUserData([]);
      } }
    >
      <button className="button-menu button-logout">
        { texto }
      </button>
    </Link>
  );
}

ButtonLogout.propTypes = {
  rota: PropTypes.string,
  texto: PropTypes.string,
};
