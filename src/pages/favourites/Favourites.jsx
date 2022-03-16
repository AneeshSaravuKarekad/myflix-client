import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { favourites } from '../../actions/favouritesAction';
import { Row, Spinner } from 'react-bootstrap';
import MovieCard from '../../components/movieCard/MovieCard';
import StarIcon from '../../../public/star-icon.png';

import './favourites.scss';

const Favourites = ({ dispatchFetchFavourites }) => {
  const dispatch = useDispatch();
  const { count, result, isLoading } = useSelector((state) => state.favourites);

  useEffect(() => {
    dispatchFetchFavourites();
  }, [dispatch]);
  return (
    <>
      <Row className="justify-content-center">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={StarIcon} style={{ width: '20px', height: '20px' }} />
          <h1 className="favourites-heading">Favourites</h1>
          <img src={StarIcon} style={{ width: '20px', height: '20px' }} />
        </div>
      </Row>
      {count === 0 && (
        <Row
          className="justify-content-center movies-page-row"
          style={{ color: 'var(--clr-text-body)', fontSize: '2rem' }}
        >
          No Favourites
        </Row>
      )}
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
