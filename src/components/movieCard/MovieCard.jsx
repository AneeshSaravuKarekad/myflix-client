import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import FavIcon from '../../../public/favIcon.svg';
import UnFavIcon from '../../../public/unFavIcon.svg';
import {
  addFavourites,
  removeFavourites,
} from '../../actions/favouritesAction';

import './movieCard.scss';

const MovieCard = ({ movie, isFav }) => {
  const [favState, setFavState] = useState(UnFavIcon);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFav) {
      setFavState(FavIcon);
    }
  }, [dispatch, favState]);

  const handleClick = () => {
    if (favState === FavIcon) {
      setFavState(UnFavIcon);
      dispatch(removeFavourites(movie._id));
    } else {
      setFavState(FavIcon);
      dispatch(addFavourites(movie._id));
    }
  };

  return (
    <Card className="movie-card">
      <div
        className="movie-card__header"
        style={{ backgroundImage: `url(${movie.imagePath})` }}
      ></div>

      <Card.Body className="movie-card__body">
        <div className="movie-card-header-contianer">
          <Card.Title className="movie-card__body-title">
            {movie.title}
          </Card.Title>
          <div className="movie-card__body-subtitle">
            <span className="movie-card__body-subtitle-rating">
              <span className="rating" style={{ opacity: '1' }}>
                {movie.rating}{' '}
              </span>{' '}
              /10{' '}
            </span>{' '}
            <span className="movie-card__body-subtitle-release">
              {' '}
              {movie.releaseYear}{' '}
            </span>
          </div>
        </div>
        <Card.Text className="movie-card__body-description">
          {' '}
          {movie.description.substr(0, 150)}...
        </Card.Text>
        <div className="movie-card__footer">
          <Link to={`/movies/${movie._id}`}>
            <Button className="view-movie-btn"> View </Button>
          </Link>
          <img
            className="fav-icon"
            src={favState}
            alt="favourite unfavourite icon"
            onClick={handleClick}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    storyLine: PropTypes.string,
    runTime: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    reviews: PropTypes.arrayOf(PropTypes.object),
    featured: PropTypes.bool,
  }),
  isFav: PropTypes.bool
};

export default MovieCard;
