import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { useSelector, useDispatch, connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovies } from '../../actions/movieAction';
import { favourites } from '../../actions/favouritesAction';
import MovieCard from '../../components/movieCard/MovieCard';
import TopBar from '../../components/topBar/TopBar';

import './movies.scss';
import Pagination from '../../components/pagination/Pagination';

const Movies = () => {
  const [filters, setFilters] = useState({ sort: '' });
  const { isLoading, pages, result } = useSelector((state) => state.movies);
  const favouritesState = useSelector((state) => state.favourites);
  const dispatch = useDispatch();
  const { title, pageNumber } = useParams();

  const [currentPage, setCurrentPage] = useState(parseInt(pageNumber) || 1);

  useEffect(() => {
    const { sort } = filters;
    dispatch(fetchMovies(title, currentPage, sort));
    dispatch(favourites());
  }, [dispatch, title, currentPage, pageNumber, filters]);

  const handleChange = (val) => {
    setTitle(val);
  };

  return (
    <>
      <Row className="justify-content-center">
        <TopBar
          query={title}
          filters={filters}
          setFilters={setFilters}
          onTitleChange={(val) => handleChange(val)}
        />
      </Row>

      <Row className="justify-content-center">
        <Pagination
          page={parseInt(currentPage)}
          pages={parseInt(pages)}
          changePage={setCurrentPage}
        />
      </Row>

      <Row className="justify-content-center movies-page-row">
        {!isLoading && result && favouritesState.result ? (
          result.map((movie, idx) => {
            let isFav = false;

            favouritesState.result.map((res) => {
              if (res._id === movie._id) {
                isFav = true;
              }
            });
            return <MovieCard key={idx} movie={movie} isFav={isFav} />;
          })
        ) : (
          <>
            <Spinner animation="border" variant="warning" />
          </>
        )}
      </Row>

      <Row className="justify-content-center">
        <Pagination
          page={parseInt(pageNumber)}
          pages={parseInt(pages)}
          changePage={setCurrentPage}
        />
      </Row>
    </>
  );
};

export default Movies;
