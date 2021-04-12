import React from 'react';
import PropTypes from 'prop-types';
import ComicsCardImage from './ComicsCardImage';
import ComicsCardTitle from './ComicsCardTitle';

const ComicsCard = (props) => {
  const { comicsIten } = props;
  return (
    <div className="card-body">
      <ComicsCardImage comicsIten={ comicsIten } />
      <ComicsCardTitle comicsIten={ comicsIten } />
    </div>
  );
};

ComicsCard.propTypes = {
  comicsIten: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ComicsCard;
