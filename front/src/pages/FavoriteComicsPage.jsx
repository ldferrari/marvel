import React from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import FavoriteComicsMain from '../components/FavoriteComicsPage/FavoriteComicsMain';
import '../css/comics_characters.css';

const FavoriteComicsPage = () => {
  const token = localStorage.getItem('token') || null;
  if (!token || token === "undefined") return <Redirect to="/login" />;
  return (
    <div className="comicsCharactersMain">
      <Menu title="QUADRINHOS FAVORITOS" />
      <FavoriteComicsMain />
    </div>
  );
};

export default FavoriteComicsPage;
