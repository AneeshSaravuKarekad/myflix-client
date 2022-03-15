import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { favourites } from '../../actions/favouritesAction';
import { fetchGenres } from '../../actions/genreAction';
import { fetchMoviesBySingleGenre } from '../../actions/movieAction';
import MovieCard from '../../components/movieCard/MovieCard';
import Pagination from '../../components/pagination/Pagination';

import './genres.scss';

const Genres = () => {
  const dispatch = useDispatch();
  const { genreName } = useParams();
  const { isLoading, genres } = useSelector((state) => state.genres);
  const favouritesState = useSelector((state) => state.favourites);
  const { movies, page, pages, count, total } = useSelector(
    (state) => state.movies
  );
  const [currentGenre, setCurrentGenre] = useState(genreName);
  const [currentPage, setCurrentPage] = useState(page || 1);

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(favourites());
    dispatch(fetchMoviesBySingleGenre(genreName));
  }, [dispatch, genreName]);
  return (
    <>
      <Container style={{ marginInline: 'auto' }}>
        <Row className="genre-top-row justify-content-center">
          <div className="genre-top-heading">{genreName}</div>
        </Row>
        <Row className="genre-content justify-content-center">
          {genres ? (
            genres.map(
              (genre, idx) =>
                genre.name === genreName && (
                  <div key={idx}>
                    {genre.description && (
                      <Row
                        key={genre.description}
                        className="genre-content-row"
                        style={{ width: '100%' }}
                      >
                        <Col className="content-label" md="2">
                          Description
                        </Col>
                        <Col className="content-main">{genre.description}</Col>
                      </Row>
                    )}

                    {genre.note && (
                      <Row
                        key={genre.note}
                        className="genre-content-row"
                        style={{ width: '100%' }}
                      >
                        <Col className="content-label" md="2">
                          Note
                        </Col>
                        <Col className="content-main">{genre.note}</Col>
                      </Row>
                    )}

                    {genre.examples && (
                      <Row
                        key={`${genre.examples}`}
                        className="genre-content-row"
                        style={{ width: '100%' }}
                      >
                        <Col className="content-label" md="2">
                          Movies
                        </Col>
                        <Col className="content-main">
                          {genre.examples.map((movie) => `${movie}, `)}
                        </Col>
                      </Row>
                    )}
                  </div>
                )
            )
          ) : (
            <Spinner animation="border" variant="warning" />
          )}
        </Row>
      </Container>
      <Container fluid key="ad">
        <Row className="genre-movies-title justify-content-center">
          Related Movies ...
        </Row>

        <Row className="genre-movies-content justify-content-center">
          {movies && favouritesState.result ? (
            <>
              <Row className="justify-content-center movies-page-row">
                {movies.map((movie) => {
                  let isFav = false;
                  favouritesState.result.map((res) => {
                    if (res._id === movie._id) {
                      isFav = true;
                    }
                  });
                  return <MovieCard movie={movie} isFav={isFav} />;
                })}
                {console.log(movies, pages, page, count, total)}
              </Row>
            </>
          ) : (
            <Spinner animation="border" variant="warning" />
          )}
        </Row>
      </Container>
    </>
  );
};

export default Genres;
