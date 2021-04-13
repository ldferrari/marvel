import React from 'react';
import PropTypes from 'prop-types';

export default function CharactersCardName(props) {
  const { characterItens } = props;
  return (
    <div className="cart-name">
      { characterItens.name }
    </div>
  );
}

CharactersCardName.propTypes = {
  characterItens: PropTypes.arrayOf(PropTypes.object).isRequired
};