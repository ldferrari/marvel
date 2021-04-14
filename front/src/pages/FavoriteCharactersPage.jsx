import React from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import FavoriteCharactersMain from '../components/FavoriteCharactersPage/FavoriteCharactersMain';
import '../css/comics_characters.css';

const FavoriteCharactersPage = () => {
  const token = localStorage.getItem('token') || null;
  if (!token || token === "undefined") return <Redirect to="/login" />;
  return (
    <div className="comicsCharactersMain">
      <Menu title="PERSONAGENS FAVORITOS" />
      <FavoriteCharactersMain />
    </div>
  );
};

export default FavoriteCharactersPage;
