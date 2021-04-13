import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/menu.css';

export default function ButtonLogout(props) {
  const { rota, text } = props;
  return (
    <Link
      to={ rota }
      onClick={ () => {
        localStorage.setItem('token', '');
      } }
    >
      <button className="buttonMenu">
        {text}
      </button>
    </Link>
  );
}

ButtonLogout.propTypes = {
  rota: PropTypes.string,
  text: PropTypes.string,
};
