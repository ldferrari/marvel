import React from 'react';
import PropTypes from 'prop-types';

function imageValid(characterItens) {
  if( characterItens.thumbnail ) {
    return characterItens.thumbnail.path+'.'+characterItens.thumbnail.extension
  }
  return characterItens.image;
}

export default function CharactersCardImage(props) {
  const { characterItens } = props;
  return (
    <div>
      <div className="divImage">
        <img
          src={ imageValid(characterItens) }
          className="card-image"
          alt={ characterItens.name }
        />
      </div>
    </div>
  );
}

CharactersCardImage.propTypes = {
  characterItens: PropTypes.arrayOf(PropTypes.object).isRequired
};
