import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import AppContext from '../context/AppContext';
import { apiCharacterByID } from '../services/apiCharacters';
import Menu from '../components/Menu/Menu';
import CharacterDatailsMain from '../components/DetailsCharacterPage/CharacterDatailsMain';
import '../css/characterDetails.css';

const CharacterDatails = (props) => {
  const { setCharacterData } = useContext(AppContext);
  const { id_characters: id } = (props.match.params);
  const token = localStorage.getItem('token') || null;
  useEffect(async() => 
    apiCharacterByID(id).then((response) => setCharacterData(response)),
  [setCharacterData]);
  if (!token || token === "undefined") return <Redirect to="/login" />;
  return (
    <div className="characterDatails">
      <Menu />
      <CharacterDatailsMain />
    </div>
  );
};

export default CharacterDatails;

CharacterDatails.propTypes = {
  match: propTypes.shape({ params: propTypes.number }).isRequired,
};
