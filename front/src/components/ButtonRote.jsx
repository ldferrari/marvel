import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/menu.css';

export default function RoteButton(props) {
  const { rota, texto } = props;
  return (
    <Link
      className="button-general"
      to={ rota }
    >
      <button className="button-menu button-search">
        { texto }
      </button>
    </Link>
  );
}

RoteButton.propTypes = {
  rota: PropTypes.string,
  texto: PropTypes.string,
};
