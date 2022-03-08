import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../actions/movieAction';
import MovieCard from '../../components/movieCard/MovieCard';

import './movies.scss';

const Movies = () => {
  const { isLoading, page, pages, count, total, result } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies(''));
  }, [dispatch]);

  return (
    <Row className="justify-content-center movies-page-row">
      {!isLoading ? (
        result.map((movie, idx) => {
          return <MovieCard key={idx} movie={movie} />;
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </Row>
  );
};

export default Movies;
