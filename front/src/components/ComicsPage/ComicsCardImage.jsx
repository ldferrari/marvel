import React from 'react';
import PropTypes from 'prop-types';

function imageValid(comicItens) {
  if( comicItens.thumbnail ) {
    return comicItens.thumbnail.path+'.'+comicItens.thumbnail.extension
  }
  return comicItens.image;
}

export default function ComicsCardImage(props) {
  const { comicItens } = props; 
  return (
    <div>
      <div className="divImage">
        <img
        src={ imageValid(comicItens) }
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
