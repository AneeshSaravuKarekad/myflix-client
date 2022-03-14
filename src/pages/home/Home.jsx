import React, { useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { fetchMoviesByGenre } from '../../actions/movieAction';

import './home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const { genres, isLoading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMoviesByGenre('Action'));
    dispatch(fetchMoviesByGenre('Adventure'));
    dispatch(fetchMoviesByGenre('Comedy'));
    dispatch(fetchMoviesByGenre('Drama'));
    dispatch(fetchMoviesByGenre('Romance'));
    dispatch(fetchMoviesByGenre('Thriller'));
    dispatch(fetchMoviesByGenre('Fantasy'));
    dispatch(fetchMoviesByGenre('History'));
    dispatch(fetchMoviesByGenre('Film-Noir'));
    dispatch(fetchMoviesByGenre('Animation'));
    dispatch(fetchMoviesByGenre('Crime'));
  }, [dispatch]);

  return (
    <div>
      {console.log(genres, isLoading)}
      <h1>Home page</h1>
      {genres &&
        genres.map((genre, idx) => (
          <h1 key={idx} style={{ color: 'red' }}>
            {genre.name}
          </h1>
        ))}
    </div>
  );
};

export default Home;
