import React from 'react';
import ComicDetailsImage from './ComicDetailsImage';
import ComicDetailsName from './ComicDetailsName';
import ComicDatailsDescipton from './ComicDatailsDescipton';
import ComicFavoriteButton from './ComicFavoriteButton';
//import ComicListComics from './ComicListComics';

export default function ComicDatailsMain() {
  return (
    <div className="datailsBody">
      <div className="datailsMain">
        <ComicDetailsImage />
        <div className="textDetails">
          <ComicDetailsName />
          <ComicDatailsDescipton />
          <ComicFavoriteButton />
        </div>
      </div>
      {/* <ComicListComics /> */}
    </div>
  );
}