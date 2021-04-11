import React from 'react';
import PropTypes from 'prop-types';
import ComicsCardImage from './ComicsCardImage';
import ProdutCardTitle from './ProdutCardTitle';

const ComicsCard = (props) => {
  const { comicsIten } = props;
  return (
    <div className="card-body">
      <ComicsCardImage comicsIten={ comicsIten } />
      <ProdutCardTitle comicsIten={ comicsIten } />
    </div>
  );
};

ComicsCard.propTypes = {
  comicsIten: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.string.isRequired,
};

export default ComicsCard;