import React from 'react';
import PropTypes from 'prop-types';

export default function ComicsCardImage(props) {
  const { comicItens } = props;
  return (
    <div>
      <div className="divImage">
        <img
          src={ comicItens.thumbnail.path+'.'+comicItens.thumbnail.extension }
          className="card-image"
          alt={ comicItens.name }
        />
      </div>
    </div>
  );
}

ComicsCardImage.propTypes = {
  comicItens: PropTypes.arrayOf(PropTypes.object).isRequired
};
