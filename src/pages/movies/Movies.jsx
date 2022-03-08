import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../actions/movieAction';
import MovieCard from '../../components/movieCard/movieCard';

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
    <Row>
      <h1> Movies Page</h1>
      {!isLoading ? (
        result.map((movie) => {
          <MovieCard movie={movie} />;
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </Row>
  );
};

export default Movies;
