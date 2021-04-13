import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import AppContext from '../context/AppContext';
import { apiComicByID } from '../services/apiComics';
import Menu from '../components/Menu/Menu';
import ComicDetailsMain from '../components/DetailsComicPage/ComicDetailsMain';
import '../css/details.css';

const ComicDatails = (props) => {
  const { setComicData } = useContext(AppContext);
  const { id_comics: id } = (props.match.params);
  const token = localStorage.getItem('token') || null;
  useEffect(async() => 
    apiComicByID(id).then((response) => setComicData(response)),
  [setComicData]);
  if (!token || token === "undefined") return <Redirect to="/login" />;
  return (
    <div className="datails">
      <Menu />
      <ComicDetailsMain />
    </div>
  );
};

export default ComicDatails;

ComicDatails.propTypes = {
  match: propTypes.shape({ params: propTypes.number }).isRequired,
};
