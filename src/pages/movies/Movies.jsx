import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../actions/movieAction';
import MovieCard from '../../components/movieCard/MovieCard';
import TopBar from '../../components/topBar/TopBar';

import './movies.scss';

const Movies = () => {
  const { isLoading, page, pages, count, total, result } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  useEffect(() => {
    dispatch(fetchMovies(title));
  }, [dispatch, title]);

  const handleChange = (val) => {
    setTitle(val);
  };

  return (
    <>
      <Row className="justify-content-center">
        <TopBar query={title} onTitleChange={(val) => handleChange(val)} />
      </Row>
      <Row className="justify-content-center movies-page-row">
        {!isLoading && result ? (
          result.map((movie, idx) => {
            return <MovieCard key={idx} movie={movie} />;
          })
        ) : (
          <Spinner animation="border" variant="warning" />
        )}
      </Row>
    </>
  );
};

export default Movies;
