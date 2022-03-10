import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { favourites } from '../../actions/favouritesAction';
import { Row, Spinner } from 'react-bootstrap';
import MovieCard from '../../components/movieCard/MovieCard';

const Favourites = ({ dispatchFetchFavourites }) => {
  const dispatch = useDispatch();
  const { count, result, isLoading } = useSelector((state) => state.favourites);

  useEffect(() => {
    dispatchFetchFavourites();
  }, [dispatch]);
  return (
    <>
      <Row className="justify-content-center">
        <h1 style={{ color: 'var(--clr-primary-200)', marginBlock: '2rem' }}>
          Favourites
        </h1>
      </Row>
      <Row className="justify-content-center movies-page-row">
        {!isLoading && result ? (
          result.map((movie, idx) => {
            let isFav = false;
            result.map((res) => {
              if (res._id === movie._id) {
                isFav = true;
              }
            });
            return <MovieCard key={idx} movie={movie} isFav={isFav} />;
          })
        ) : (
          <Spinner animation="border" variant="warning" />
        )}
      </Row>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchFavourites: () => dispatch(favourites()),
});

export default connect(null, mapDispatchToProps)(Favourites);

// export default Favourites;
