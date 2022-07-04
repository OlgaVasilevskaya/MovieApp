import React from 'react';

import './detail.scss';

const Detail = (props) => {
  const {detail} = props;

  return (
    <div className='detail-wrapper'>
      <div className='details-title'>{detail.name}</div>

      <div className='details-annotation'>{detail.annotation}</div>
    </div>
  )
}

export default Detail;
