import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Container, Spinner, Row, Col, Button } from 'react-bootstrap';
import moment from 'moment';

import calenderIcon from '../../../public/calendar-icon.png';
import starIcon from '../../../public/star-icon.png';
import timeIcon from '../../../public/time-icon.png';
import profileIcon from '../../../public/profileIcon.png';

import './movieDetails.scss';

import { fetchMovieDetails } from '../../actions/movieAction';
import { getReviews } from '../../actions/reviewAction';
import ReviewForm from '../../components/reviewForm/ReviewForm';

const MovieDetails = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { movie, isLoading } = useSelector((state) => state.movies);
  const { reviews, count } = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
    dispatch(getReviews(movieId));
  }, [dispatch]);

  return (
    <Container style={{ marginInline: 'auto' }}>
      <Row className="movie-page justify-content-center">
        {!isLoading && movie ? (
          <>
            <Col className="movie-page-description" md={8}>
              <h1 className="movie-title">{movie.title}</h1>
              <div className="release-rating">
                <span className="content">
                  <img
                    style={{
                      width: '20px',
                      float: 'left',
                      marginRight: '0.5rem',
                    }}
                    src={calenderIcon}
                    alt="calender icon"
                  />
                  {movie.releaseYear}
                </span>
                <span className="content">{'   |    '}</span>
                <span className="content">
                  {' '}
                  <img
                    style={{
                      width: '20px',
                      float: 'left',
                      marginRight: '0.5rem',
                    }}
                    src={starIcon}
                    alt="rating icon"
                  />{' '}
                  {movie.rating}
                </span>
                <span className="content">{'   |    '}</span>
                <span className="content">
                  {' '}
                  <img
                    style={{
                      width: '20px',
                      float: 'left',
                      marginRight: '0.5rem',
                    }}
                    src={timeIcon}
                    alt="run time icon"
                  />{' '}
                  {movie.runTime}
                </span>
              </div>
              <hr />

              <h4 className="label">Description</h4>
              <span className="content">{movie.description}</span>
              <hr />

              <h4 className="label">Story Line</h4>
              <span className="content">{movie.storyLine}</span>
              <hr />

              <h4 className="label">Director</h4>
              <Link to={`/directors/${movie.director.name}`}>
                <Button variant="outline-success">{movie.director.name}</Button>
              </Link>

              <hr />

              <h4 className="label">
                Genre{'('}s{')'}
              </h4>
              {movie.genres.map((genre) => {
                return (
                  <Link to={`/genres/${genre.name}`} key={genre.name}>
                    <Button
                      key={genre._id}
                      variant="outline-primary"
                      style={{ marginRight: '1rem' }}
                    >
                      {genre.name}
                    </Button>
                  </Link>
                );
              })}

              <hr />

              <h4 className="label">
                Actor{'('}s{')'}
              </h4>
              {movie.actors.map((actor) => {
                return (
                  <Link to={`/actors/${actor.name}`} key={actor.name}>
                    <Button
                      key={actor._id}
                      variant="outline-danger"
                      style={{ marginRight: '1rem', marginBottom: '1rem' }}
                    >
                      {actor.name}
                    </Button>
                  </Link>
                );
              })}

              <hr />
            </Col>
            <Col className="movie-page-poster" md={4}>
              <img src={movie.imagePath} alt="movie-poster" />
            </Col>
          </>
        ) : (
          <Spinner animation="border" variant="warning" />
        )}
      </Row>
      <Row className="review-row-title">Reviews</Row>
      <Row>
        {' '}
        <ReviewForm />{' '}
      </Row>
      <Row className="text-muted justify-content-center">{count} reviews</Row>
      <Row className="review-row-content">
        {movie ? (
          reviews && count !== 0 ? (
            reviews.map((review, idx) => (
              <Container className="review-card" key={idx}>
                <Row>
                  <Col
                    sm="2"
                    style={{
                      maxWidth: '90px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      src={profileIcon}
                      alt="profile image"
                      style={{ width: '100%' }}
                    />
                  </Col>
                  <Col className="review-card-content">
                    <Row>
                      <Col>
                        <Row className="review-card-content__header">
                          {review.postedBy.username}
                        </Row>
                        <Row className="review-card-content__sub text-muted">
                          {moment(review.createdAt).startOf('second').fromNow()}
                        </Row>
                      </Col>
                      <Col
                        style={{ marginInline: 'auto' }}
                        className="stars-col"
                      >
                        <img src={starIcon} alt="stars icon" />
                        <div>{review.stars}</div> / 10
                      </Col>
                    </Row>

                    <Row>{review.caption}</Row>
                    <Row>{review.comment}</Row>
                  </Col>
                </Row>
                <hr />
              </Container>
            ))
          ) : (
            <h1 style={{ color: 'var(--clr-text-body)', marginBlock: '2rem' }}>
              No reviews Yet..
            </h1>
          )
        ) : (
          <Spinner animation="border" variant="warning" />
        )}
      </Row>
    </Container>
  );
};

export default MovieDetails;
