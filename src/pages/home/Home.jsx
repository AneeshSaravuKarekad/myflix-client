import React, { useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesByGenre } from '../../actions/movieAction';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss';

import './home.scss';
import RightChevron from '../../../public/right-chevron-1.png';
import CarouselCard from '../../components/carouselCard/CarouselCard';

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
    <Container
      className="home-genre-container"
      style={{ marginTop: '2rem' }}
      fluid
    >
      {!isLoading && genres ? (
        <>
          {genres.map((genre) => {
            return (
              <div key={genre.name}>
                <Link className="genre-heading" to={`/genres/${genre.name}`}>
                  {genre.name}
                  <img src={RightChevron} key={genre.name} alt="chevron" />
                </Link>
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  // spaceBetween={50}
                  slidesPerView={6}
                  navigation={true}
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  breakpoints={{
                    // when window width is >= 0px
                    0: {
                      width: 0,
                      slidesPerView: 1.1,
                    },
                    // when window width is >= 400px

                    400: {
                      width: 400,
                      slidesPerView: 1.1,
                    },
                  }}
                >
                  {genre.movies.map((movie, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="genre-content">
                        <CarouselCard key={movie._id} movie={movie} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                )
              </div>
            );
          })}
        </>
      ) : (
        <Spinner animation="border" variant="warning" />
      )}
    </Container>
  );
};

export default Home;
