import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import './details.scss';

function Details({ match }) {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {eventId} = useParams();
  console.log(eventId, 'eventId');

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    setIsLoading(true);
    const data = await fetch(
      `https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22event%22:%22${eventId}%22,%22city%22:%221%22%7D&extended=true`
    );

    const resultList = await data.json();
    console.log(movie, 'details');
    console.log(data, 'data');
    setMovie(resultList);
    setIsLoading(false);
  };

  return (
    <div>
      {
        isLoading
          ? (<div className='loader-details'></div>)
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
