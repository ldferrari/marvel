import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import coraçãoPreto from '../../image/coraçãoPreto.png';
import coraçãoVermelho from '../../image/coraçãoVermelho.png';

function convertFavorite(comicItens, setFavorite) {
  const saida = {
    id: comicItens.id,
    title: comicItens.title,
    image: imageValid(comicItens),
  };
  addFavority(saida, setFavorite);
  return saida;
}

function imageValid(comicItens) {
  if( comicItens.thumbnail ) {
    return comicItens.thumbnail.path+'.'+comicItens.thumbnail.extension
  }
  return comicItens.image;
}

function addFavority(comics, setFavorite) {
  let oldFav = localStorage.getItem('favoriteComic');
  if (!oldFav) {
    setFavorite(true);
    return localStorage.setItem('favoriteComic', JSON.stringify([comics]));
  }
  oldFav = [...JSON.parse(oldFav)];
  if (oldFav.find((el) => el.id === comics.id)) {
    setFavorite(false);
    return localStorage.setItem(
      'favoriteComic',
      JSON.stringify(oldFav.filter((el) => el.id !== comics.id)),
    );
  }
  const temp = [...oldFav, comics];
  setFavorite(true);
  return localStorage.setItem('favoriteComic', JSON.stringify(temp));
}

function favoriteComic(setFavorite, id) {
  let favoriteComicVar = localStorage.getItem('favoriteComic');
  if (favoriteComicVar) {
    favoriteComicVar = JSON.parse(favoriteComicVar);
    favoriteComicVar = favoriteComicVar.find((el) => el.id === id);
    if (favoriteComicVar) {
      return setFavorite(true);
    }
  }
  return setFavorite(false);
}

export default function ComicFavoriteButton({ comicItens }) {
  const [favorite, setFavorite] = useState(false);
  useEffect(async() => favoriteComic(setFavorite, comicItens.id), []);
  return (
    <Link onClick={() => convertFavorite(comicItens, setFavorite)}>
      {
        favorite ?
        <img src={ coraçãoVermelho } className="coraçãoVermelhoCP" alt="likeIcon"/> :
        <img src={ coraçãoPreto } className="coraçãoPretoCP" alt="likeIcon"/>
      }
    </Link>
  );
}

ComicFavoriteButton.propTypes = {
  comicItens: propTypes.object.isRequired,
};
