import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/menu.css';

export default function RoteButton(props) {
  const { rota, texto } = props;
  return (
    <Link
      to={ rota }
      onClick={ () => {
        if (rota === "/")
        localStorage.setItem('token', '');
      } }
    >
      <button className="buttonMenu">
        { texto }
      </button>
    </Link>
  );
}

RoteButton.propTypes = {
  rota: PropTypes.string,
  texto: PropTypes.string,
};
