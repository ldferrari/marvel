import React from 'react';
import PropTypes from 'prop-types';

export default function ComicsCardTitle(props) {
  const { comicItens } = props;
  return (
    <div className="cart-name">
      { comicItens.title }
    </div>
  );
}

ComicsCardTitle.propTypes = {
  comicItens: PropTypes.arrayOf(PropTypes.object).isRequired
};
