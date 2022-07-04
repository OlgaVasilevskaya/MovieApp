import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import Spinner from '../Spinner';
import Detail from '../Detail';

import './details.scss';

function Details({ match }) {
  const [details, setDetails] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(true);

  const {eventId} = useParams();

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    try {
      setIsLoading(true);

      const data = await fetch(
        `https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22event%22:%22${eventId}%22,%22city%22:%221%22%7D&extended=true`
      );

      const resultList = await data.json();

      setDetails(resultList);
      setIsLoading(false);

      if(isError) {
        throw new Error('Ooops, something went wrong');
      }
    } catch(e) {
        console.log(e.message);
        setIsError(true);
        console.log(setIsError, 'setIsError');
    }
  };

  return (
    <div className='details'>
      {
        isLoading
          ? <Spinner />
          : (
            // не получается без map вывести values. Наведи на мысль, пжл
            <> 
              {details.map((d) => <Detail key={d.eventId} detail={d} />)}
            </>
          )
      }
    </div>
  );
}

export default Details;
