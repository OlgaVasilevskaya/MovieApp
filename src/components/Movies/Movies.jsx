import React, {useState, useEffect, useCallback} from 'react';

import './movies.scss';

import Movie from '../Movie/Movie';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchItems([]);
  }, []);

  const fetchItems = useCallback(async () => {
    setIsLoading(true);

    const data = await fetch(
      `https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:1%7D&extended=true`
    );

    const resultList = await data.json();
    console.log(movies, 'movies');
    setMovies(resultList);
    setIsLoading(false);
  }, []);

  // if (isError) {
  //   return <div>Ooops, something went wrong</div>
  // }

  return (
    <div className='movies'>
      {
        isLoading
          ? (<div className='loader-movies'></div>)
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
