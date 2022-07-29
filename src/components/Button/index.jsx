import React from 'react';
import { useNavigate } from 'react-router-dom';

import './button.scss';

const Button = (props) => {
  // const { movie } = props;

  // const navigate = useNavigate();

  // const handleBuyClick = (eventId) => () => {
  //   navigate(`/movie/${movie.eventId}`);
  // }

  return (
  <button 
  className='buy-button' 
  // onClick={handleBuyClick(movie.eventId)}
  >
    Buy ticket
  </button>
  )
};

export default Button;
