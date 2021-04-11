import React from 'react';
import PropTypes from 'prop-types';

export default function ProdutCardTitle(props) {
  const { comicsIten } = props;
  return (
    <div className="cart-name">
      { comicsIten.title }
    </div>
  );
}

ProdutCardTitle.propTypes = {
  comicsIten: PropTypes.arrayOf(PropTypes.object).isRequired
};
