import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

import FavIcon from '../../../public/favIcon.svg';
import UnFavIcon from '../../../public/unFavIcon.svg';

import './movieCard.scss';

const MovieCard = ({ movie }) => {
  const [favState, setFavState] = useState(UnFavIcon);

  const handleClick = () => {
    if (favState === FavIcon) {
      setFavState(UnFavIcon);
    } else {
      setFavState(FavIcon);
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
          <Button className="view-movie-btn"> View </Button>
          <img
            className="fav-icon"
            src={favState}
            onClick={handleClick}
            alt="favourite unfavourite icon"
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
