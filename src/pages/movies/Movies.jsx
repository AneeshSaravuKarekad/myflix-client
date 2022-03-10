import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { useSelector, useDispatch, connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovies } from '../../actions/movieAction';
import MovieCard from '../../components/movieCard/MovieCard';
import TopBar from '../../components/topBar/TopBar';

import './movies.scss';
import Pagination from '../../components/pagination/Pagination';

const Movies = ({ user }) => {
  const { isLoading, page, pages, count, total, result } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();
  const { title, pageNumber } = useParams();

  const [currentPage, setCurrentPage] = useState(pageNumber || 1);

  useEffect(() => {
    dispatch(fetchMovies(title, pageNumber));
  }, [dispatch, title, currentPage, pageNumber]);

  const handleChange = (val) => {
    setTitle(val);
  };

  return (
    <>
      <Row className="justify-content-center">
        <TopBar query={title} onTitleChange={(val) => handleChange(val)} />
      </Row>

      <Row className="justify-content-center">
        <Pagination
          page={currentPage}
          pages={pages}
          changePage={setCurrentPage}
        />
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

      <Row className="justify-content-center">
        <Pagination
          page={currentPage}
          pages={pages}
          changePage={setCurrentPage}
        />
      </Row>
    </>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Movies);

// export default Movies;
