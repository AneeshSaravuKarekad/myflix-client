import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres } from '../../actions/genreAction';

const Genres = () => {
  const dispatch = useDispatch();
  const { isLoading, genres } = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);
  return (
    <div>
      {console.log(isLoading, genres)}
      <h1>Genres Page</h1>
    </div>
  );
};

export default Genres;
