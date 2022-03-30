import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
import "./Row.css";
import MovieModal from './MovieModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import "swiper/css/bundle";

export default function Row({ isLargeLow, title, id, fetchUrl }) {

  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});


  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
  };

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  return (
    <section className="row">
      <h2>{title}</h2>
      <Swiper 
        className="slider"
        modules={[Navigation]}
        navigation
        loop={true}
        breakpoints={{
          1378: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}>
        <div id={id} className="row__posters">
          {movies.map(movie => (
            <SwiperSlide key={movie.id}>
              <img 
                className={`row__poster ${isLargeLow && "row__posterLarge"}`}
                src={`https://image.tmdb.org/t/p/original/${isLargeLow ? movie.poster_path: movie.backdrop_path}`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
                />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      {
        modalOpen && (
          <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
        )
      }

    </section>
  )
}
