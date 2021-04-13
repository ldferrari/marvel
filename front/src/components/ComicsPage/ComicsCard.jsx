import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ComicsCardImage from './ComicsCardImage';
import ComicsCardTitle from './ComicsCardTitle';
import ComicsFavoriteButton from './ComicsFavoriteButton';

const ComicsCard = (props) => {
  const { comicItens } = props;
  const id_comics = comicItens.id;
  return (
    <div className="card-body">
      <Link to={`/comics/${id_comics}`}>
        <ComicsCardImage comicItens={ comicItens } />
        <ComicsCardTitle comicItens={ comicItens } />
      </Link>
      <ComicsFavoriteButton comicItens={ comicItens } />
    </div>
  );
};

ComicsCard.propTypes = {
  comicItens: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ComicsCard;
