import React from 'react';
import { Card } from 'react-bootstrap';
import starIcon from '../../../public/star-icon.png';
import timeIcon from '../../../public/calendar-icon.png';

import './carousel.scss';

const CarouselCard = ({ movie }) => {
  return (
    <Card className="carousel-card">
      <div
        className="carousel-card__header"
        style={{ backgroundImage: `url(${movie.imagePath})` }}
      >
        <div className="carousel-card__header-title">
          <h4>{movie.title}</h4>
        </div>
        <div className="carousel-card__header-content">
          <div className="carousel-card__header-content-top">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={starIcon} />
              {movie.rating}/
              <span
                style={{ fontSize: '0.75rem', color: 'var(--clr-text-body)' }}
              >
                10
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={timeIcon} alt="" />
              <span>{movie.runTime}</span>
            </div>
          </div>
          <span className="carousel-card__header-content-description">
            {movie.description}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default CarouselCard;
