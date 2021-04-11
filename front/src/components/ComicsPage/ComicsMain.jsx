import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ComicsCard from './ComicsCard';
import AppContext from '../../context/AppContext';

export default function comicsMain() {
  const { comicsItens } = useContext(AppContext);
  return (
    <div className="listComicsItens marginTop">
      {comicsItens.map((comicsIten, index) => (
        <ComicsCard key={ comicsIten.id } index={ index } comicsIten={ comicsIten } />
      ))}
    </div>
  );
}

comicsMain.propTypes = {
  comicsItens: PropTypes.arrayOf(PropTypes.object).isRequired,
};
