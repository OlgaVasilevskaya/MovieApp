import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import './details.scss';

import Spinner from '../Spinner/Spinner';

function Details({ match }) {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(true);
  const {eventId} = useParams();

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    try {
      setIsLoading(true);
      setIsError(false);

      const data = await fetch(
        `https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22event%22:%22${eventId}%22,%22city%22:%221%22%7D&extended=true`
      );

      const resultList = await data.json();

      setMovie(resultList);
      setIsLoading(false);
      setIsError(true);

      if(!isError) {
        throw new Error('Ooops, something went wrong');
      }
    } catch(e) {
        alert(e.message);
    }
  };

  return (
    <div>
      {
        isLoading
          ? <Spinner />
          : (
            <>
              {movie.map((m) => 
                <div key={m.eventId}>
                  <div className='details-title'>{m.name}</div>
                  <div className='details-annotation'>{m.annotation}</div>
                </div>
              )}
            </>
          )
      }
    </div>
  );
}

export default Details;
