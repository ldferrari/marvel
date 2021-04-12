import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CharactersCard from './CharactersCard';
import AppContext from '../../context/AppContext';

export default function CharactersMain() {
  const { charactersItens } = useContext(AppContext);
  return (
    <div className="listItens marginTop">
      {charactersItens.map((charactersIten) => (
        <CharactersCard key={ charactersIten.id } charactersIten={ charactersIten } />
      ))}
    </div>
  );
}

CharactersMain.propTypes = {
  charactersItens: PropTypes.arrayOf(PropTypes.object).isRequired,
};
