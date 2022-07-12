import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import Spinner from '../Spinner';
import DetailsElements from '../DetailsElements';

import './details.scss';

const Details = ({ match }) => {
  const [details, setDetails] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  const { eventId } = useParams();

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = useCallback(async () => {
    try {
      setIsLoading(true);

      const data = await fetch(
        `https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22event%22:%22${eventId}%22,%22city%22:%221%22%7D&extended=true`
      );

      const movieDetails = await data.json();

      setDetails(movieDetails[0]);
      setIsLoading(false);

      if(!isError) {
        throw new Error('Ooops, something went wrong');
      }
    } catch(e) {
        setIsError(true);
    }
  }, []);

  return (
    <div className='details'>
      {
        isLoading
          ? <Spinner />
          : (
            <DetailsElements key={details.eventId} detail={details} />
          )
      }
    </div>
  );
}

export default Details;
