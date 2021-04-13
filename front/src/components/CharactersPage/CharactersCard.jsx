import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CharactersCardImage from './CharactersCardImage';
import CharactersCardName from './CharactersCardName';
import CharactersFavoriteButton from './CharactersFavoriteButton';

const CharactersCard = (props) => {
  const { characterItens } = props;
  const id_character = characterItens.id;
  return (
    <div className="card-body">
      <Link to={`/characters/${id_character}`}>
        <CharactersCardImage characterItens={ characterItens } />
        <CharactersCardName characterItens={ characterItens } />
      </Link>
      <CharactersFavoriteButton characterItens={ characterItens }/>
    </div>
  );
};

CharactersCard.propTypes = {
  characterItens: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CharactersCard;
