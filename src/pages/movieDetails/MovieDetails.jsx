import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Container, Spinner, Row, Col, Button } from 'react-bootstrap';

import { fetchMovieDetails } from '../../actions/movieAction';
import calenderIcon from '../../../public/calendar-icon.png';
import starIcon from '../../../public/star-icon.png';
import timeIcon from '../../../public/time-icon.png';

import './movieDetails.scss';

const MovieDetails = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { movie, isLoading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
  }, [dispatch]);

  return (
    <Container>
      <Row className="movie-page">
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
      {/* <Row className="movie-page review-row">
        <Review movieId={movieId} />
      </Row> */}
    </Container>
  );
};

export default MovieDetails;
