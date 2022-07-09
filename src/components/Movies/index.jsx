import React, { useState, useEffect, useCallback } from 'react';

import Movie from '../Movie';
import Spinner from '../Spinner';

import './movies.scss';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [city, setCity] = useState(1);

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, [city]);

  const handleChange = (e)  => { //не могу понять, почему не срабатывает условие. Подскажи, пжл, что не так
    if (e.target.city === 'minsk') {

      return setCity(1);
    } else {

      return setCity(5);
    }
  };

  const fetchMovies = useCallback(async () => {
    try {
      setIsLoading(true);

      const data = await fetch(
        `https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:${city}%7D&extended=true`
      )

      console.log(city, 'city');

      const movieDetails = await data.json();

      setMovies(movieDetails);
      setIsLoading(false);

      if(!isError) {
        throw new Error('Ooops, something went wrong');
      }
    } catch(e) {
        setIsError(true);
    }
  }, []);

  // if (isError) {
  //   return <div>Ooops, something went wrong</div>
  // }

  return (
    <div className='movies'>
      {
        isLoading
          ? <Spinner />
          : (
              <>
                <select className='movies-city' value={city} onChange={handleChange}>
                  <option value="minsk">minsk</option>
                  <option value="grodno">grodno</option>
                </select>

                {movies.map((m) => <Movie key={m.eventId} movie={m} />)}
              </>
          )
      }
    </div>
  );
}

export default Movies;
