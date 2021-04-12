import React from 'react';
import PropTypes from 'prop-types';

export default function ComicsCardTitle(props) {
  const { comicsIten } = props;
  return (
    <div className="cart-name">
      { comicsIten.title }
    </div>
  );
}

ComicsCardTitle.propTypes = {
  comicsIten: PropTypes.arrayOf(PropTypes.object).isRequired
};
