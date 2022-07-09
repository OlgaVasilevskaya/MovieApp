import React from 'react';

import Button from '../Button';

import './detailsElements.scss';

const Detail = (props) => {
  const {detail} = props;

  return (
    <div className='detail-wrapper'>
      <div className="detail-descr">
        <div className='details-title'>{detail.name}</div>

        <div className='details-annotation'>{detail.annotation}</div>
      </div>

      <div className="details-info">
        <p>Choose cinema</p>

        <select>
          <option selectedvalue="ArenaCity">Arena City</option>
          <option value="VokaCINEMA">VOKA CINEMA</option>
        </select>

        <p>Choose date</p>
        <input type="date" />

        <p>Choose time</p>
        <input type="time" />

        <Button />
      </div>
    </div>
  )
}

export default Detail;
