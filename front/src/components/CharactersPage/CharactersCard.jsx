import React from 'react';
import PropTypes from 'prop-types';
import CharactersCardImage from './CharactersCardImage';
import CharactersCardName from './CharactersCardName';

const CharactersCard = (props) => {
  const { charactersIten } = props;
  return (
    <div className="card-body">
      <CharactersCardImage charactersIten={ charactersIten } />
      <CharactersCardName charactersIten={ charactersIten } />
    </div>
  );
};

CharactersCard.propTypes = {
  charactersIten: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CharactersCard;
