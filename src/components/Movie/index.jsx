import { SentimentVerySatisfiedOutlined } from '@mui/icons-material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';

import './movie.scss';

const Movie = (props) => {
  const { movie } = props;
  const { bannerLink, name, ageLimit } = movie;

  const navigate = useNavigate();

  const handleBuyClick = (eventId) => () => {
    navigate(`/movie/${movie.eventId}`);
  }

  return (
    <div className='movie-wrapper'>
      <img className='movie-img' src={bannerLink} alt="movie" />

      <div className='movie-name'>{name}</div>

      <div className='movie-age'>{ageLimit.acronym}</div>

      {/* <Button /> */}

      <button onClick={handleBuyClick(movie.eventId)}>Buy ticket</button>
    </div>
  )
}

export default Movie;
