import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import coraçãoPreto from '../../image/coraçãoPreto.png';
import coraçãoVermelho from '../../image/coraçãoVermelho.png';
import AppContext from '../../context/AppContext';

function convertFavorite(comicData, setFavorite) {
  const saida = {
    id: comicData[0].id,
    name: comicData[0].name,
    image: comicData[0].thumbnail.path+'.'+comicData[0].thumbnail.extension,
  };
  addFavority(saida, setFavorite);
  return saida;
}

function addFavority(comic, setFavorite) {
  let oldFav = localStorage.getItem('favoriteComic');
  if (!oldFav) {
    setFavorite(true);
    return localStorage.setItem('favoriteComic', JSON.stringify([comic]));
  }
  oldFav = [...JSON.parse(oldFav)];
  if (oldFav.find((el) => el.id === comic.id)) {
    setFavorite(false);
    return localStorage.setItem(
      'favoriteComic',
      JSON.stringify(oldFav.filter((el) => el.id !== comic.id)),
    );
  }
  const temp = [...oldFav, comic];
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

export default function FavoriteButton() {
  const { comicData } = useContext(AppContext);
  const maior = (comicData.length > 0)
  const [favorite, setFavorite] = useState(false);
  useEffect(async() => {if(maior) favoriteComic(setFavorite, comicData[0].id), []});
  return (
    <Link onClick={() => convertFavorite(comicData, setFavorite)}>
      {
        favorite ?
        <img src={ coraçãoVermelho } className="coraçãoVermelho" alt="likeIcon"/> :
        <img src={ coraçãoPreto } className="coraçãoPreto" alt="likeIcon"/>
      }
    </Link>
  );
}