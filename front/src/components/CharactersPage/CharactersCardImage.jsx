import React from 'react';
import PropTypes from 'prop-types';

export default function CharactersCardImage(props) {
  const { characterItens } = props;
  return (
    <div>
      <div className="divImage">
        <img
          src={ characterItens.thumbnail.path+'.'+characterItens.thumbnail.extension }
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
