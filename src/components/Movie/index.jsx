import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';

import './movie.scss';

const Movie = (props) => {
  const {movie} = props;

  return (
    <div className='movie-wrapper'>
      <img className='movie-img' src={movie.bannerLink} alt="movie" />

      <div className='movie-name'>{movie.name}</div>

      <div className='movie-age'>{movie.ageLimit.acronym}</div>
     
      <Link to={`/movie/${movie.eventId}`}>
        <Button />
      </Link>
    </div>
  )
}

export default Movie;
