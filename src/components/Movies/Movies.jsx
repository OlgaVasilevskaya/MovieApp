import React, {useState, useEffect, useCallback, useError} from 'react';

import './movies.scss';

import Movie from '../Movie/Movie';
import Spinner from '../Spinner/Spinner';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(true);

  useEffect(() => {
    fetchItems([]);
  }, []);

  const fetchItems = useCallback( async () => {
    try {
      setIsLoading(true);
      setIsError(false);

      const data = await fetch(
        `https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:1%7D&extended=true`
      )

      const resultList = await data.json();

      setMovies(resultList);
      setIsLoading(false);
      setIsError(true);

      if(!isError) {
        throw new Error('Ooops, something went wrong');
      }
    } catch(e) {
        alert(e.message);
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
                {movies.map((m) => <Movie key={m.eventId} movie={m} />)}
              </>
          )
      }
    </div>
  );
}

export default Movies;
