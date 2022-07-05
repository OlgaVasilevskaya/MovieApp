import React, { useState, useEffect, useCallback } from 'react';

import Movie from '../Movie';
import Spinner from '../Spinner';

import './movies.scss';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = useCallback(async () => {
    try {
      setIsLoading(true);

      const data = await fetch(
        `https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:1%7D&extended=true`
      )

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
      <select className='movies-city'>
        <option selectedvalue="minsk">Minsk</option>
        <option value="grodno">Grodno</option>
      </select>

      {
        isLoading
          ? <Spinner />
          : (
              <>
                {movies.map((m) => <Movie key={m.eventId} movie={m} />)}
              </>
          )
      }
    </div>
  );
}

export default Movies;
