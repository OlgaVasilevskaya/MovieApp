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
  }, []);

  const handleChange = useCallback((e) => {
    e.target.value === 'minsk' ? setCity(1) : setCity(5)
  }, []);

  const fetchMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fetch(
        `https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:${city}%7D&extended=true`
      )

      const movieDetails = await data.json();

      setMovies(movieDetails);
      setIsLoading(false);

      if(isError) {
        throw new Error('Ooops, something went wrong');
      }
    } catch(e) {
        setIsError(true);
    }
  }, []);

  return (
    <div className='movies'>
      {
        isError
          ? <div>Ooops, something went wrong</div>
          : (
            <> 
              {isLoading
                ? <Spinner />
                : (
                  <>
                    <select className='movies-city' onChange={handleChange}>
                      <option>minsk</option>
                      <option>grodno</option>
                    </select>

                    {movies.map((m) => <Movie key={m.eventId} movie={m} />)}
                  </>
                )
              }
            </>
          )
      }
    </div>
  );
}

export default Movies;
