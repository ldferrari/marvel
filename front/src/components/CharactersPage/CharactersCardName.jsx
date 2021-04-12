import React from 'react';
import PropTypes from 'prop-types';

export default function CharactersCardName(props) {
  const { charactersIten } = props;
  return (
    <div className="cart-name">
      { charactersIten.name }
    </div>
  );
}

CharactersCardName.propTypes = {
  charactersIten: PropTypes.arrayOf(PropTypes.object).isRequired
};