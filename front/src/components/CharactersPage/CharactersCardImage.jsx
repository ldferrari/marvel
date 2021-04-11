import React from 'react';
import PropTypes from 'prop-types';

export default function CharactersCardImage(props) {
  const { charactersIten } = props;
  return (
    <div>
      <div className="divImage">
        <img
          height="70px"
          src={ charactersIten.thumbnail.path+'.'+charactersIten.thumbnail.extension }
          className="card-image"
          alt={ charactersIten.name }
        />
      </div>
    </div>
  );
}

CharactersCardImage.propTypes = {
  charactersIten: PropTypes.arrayOf(PropTypes.object).isRequired
};
