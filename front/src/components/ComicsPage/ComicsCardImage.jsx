import React from 'react';
import PropTypes from 'prop-types';

export default function ComicsCardImage(props) {
  const { comicsIten } = props;
  return (
    <div>
      <div className="divImage">
        <img
          src={ comicsIten.thumbnail.path+'.'+comicsIten.thumbnail.extension }
          className="card-image"
          alt={ comicsIten.name }
        />
      </div>
    </div>
  );
}

ComicsCardImage.propTypes = {
  comicsIten: PropTypes.arrayOf(PropTypes.object).isRequired
};
