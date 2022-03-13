import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Spinner, Row, Col, Button } from 'react-bootstrap';
import moment from 'moment';

import { fetchMoviesByActor } from '../../actions/movieAction';
import MovieCard from '../../components/movieCard/MovieCard';

import './actor.scss';

const Actor = () => {
  const { actorName } = useParams();
  const dispatch = useDispatch();
  const { isLoading, actor, movies, count, error } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMoviesByActor(actorName));
  }, [dispatch]);

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };

    return (
      <span className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <span
          onClick={toggleReadMore}
          className="read-or-hide"
          style={{
            textDecoration: 'underline',
            cursor: 'pointer',
            fontSize: '1rem',
            color: 'var(--info)',
          }}
        >
          {isReadMore ? '...read more' : ' show less'}
        </span>
      </span>
    );
  };

  return (
    <Container className="actor-container">
      {!isLoading && actor ? (
        <>
          <Row className="name-row">
            <Col md={2} className="label">
              <h3>Name</h3>
            </Col>
            <Col md={10} className="content">
              <span>{actor.name}</span>
            </Col>
          </Row>
          <hr />

          <Row className="description-row">
            <Col md={2} className="label">
              <h3>Bio</h3>
            </Col>
            <Col md={10} className="content">
              <ReadMore>{actor.bio}</ReadMore>
            </Col>
          </Row>

          <hr />
          {actor.birth ? (
            <Row className="birth-row">
              <Col md={2} className="label">
                <h3>Born</h3>
              </Col>
              <Col md={10} className="content">
                <span>
                  {moment(actor.birth.date).format('LL')} in {actor.birth.place}{' '}
                </span>
              </Col>
            </Row>
          ) : null}

          <hr />

          <Row
            className="actor-movies-title-row"
            style={{ justifyContent: 'center' }}
          >
            <Col md={2} className="label">
              <h3 style={{ marginBottom: '1rem' }}>Movies</h3>
            </Col>
          </Row>
          <Row>
            {movies.map((movie) => {
              return <MovieCard key={movie._id} movie={movie} />;
            })}
          </Row>
        </>
      ) : (
        <Spinner animation="border" variant="warning" />
      )}
    </Container>
  );
};

export default Actor;
