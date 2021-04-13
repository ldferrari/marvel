import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ComicsCardImage from './ComicsCardImage';
import ComicsCardTitle from './ComicsCardTitle';

const ComicsCard = (props) => {
  const { comicsIten } = props;
  const id_comics = comicsIten.id;
  return (
    <Link to={`/comics/${id_comics}`}>
      <div className="card-body">
        <ComicsCardImage comicsIten={ comicsIten } />
        <ComicsCardTitle comicsIten={ comicsIten } />
      </div>
    </Link>
  );
};

ComicsCard.propTypes = {
  comicsIten: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ComicsCard;
